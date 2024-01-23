import { calculateProfitValues, getFulfilmentText } from '../../../utils/profitCalculator/profit_calculator_helpers';
import { ukMarketPlace, usMarketPlace } from '../../../utils/constants';

import DetailPageInnerDropDowns from './DetailPageInnerDropDowns';
import InputField from './InputField';
import InputSelect from './InputSelect';
import InputToggle from './InputToggle';
import React from 'react';
import RenderIf from '../../../commons/RenderIf';
import TotalFeeData from './TotalFeeData';
import { isNull } from 'lodash';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const ProfitCalculator = () => {
  const { currencySymbol, marketplace, profitCalculatorData, productData, productFees, offersData, googleShoppingData } = useSelector(state => state.DetailPage);

  const { t } = useTranslation();

  const storageMonthsOptions = [ ...Array(13) ].map((_, idx) => ({ label: `${idx}`, value: idx }));

  const inputFieldValues = [
    { label: t('Cost'), id: 'cost_price_of_profit_calculator', fieldName: 'costPrice', value: profitCalculatorData?.costPrice, symbol: currencySymbol, isDisabled: false },
    { label: t('Price'), id: 'sale_price_of_profit_calculator', fieldName: 'salePrice', value: profitCalculatorData?.salePrice, symbol: currencySymbol, isDisabled: false },
    {
      label: t('Prep Fee'),
      id: 'prep_fee_of_profit_calculator',
      fieldName: 'prepFee',
      value: profitCalculatorData?.prepFee,
      symbol: currencySymbol,
      isDisabled: profitCalculatorData?.fulfilmentType,
    },
  ];

  const maxCostInputFieldValues = [
    { label: t('Min.ROI'), id: 'min_roi_of_profit_calculator', fieldName: 'minROI', value: profitCalculatorData?.minROI, symbol: '%' },
    { label: t('Min.Profit'), id: 'min_profit_of_profit_calculator', fieldName: 'minProfit', value: profitCalculatorData?.minProfit, symbol: currencySymbol },
  ];

  const totalFeeDataValues = [
    {
      id: 'fulfilment',
      currencySymbol: currencySymbol,
      value: profitCalculatorData?.fulfilmentType ? 0 : profitCalculatorData.fulfilmentFee,
      ...getFulfilmentText(marketplace, productFees?.lowFbaProductTier, profitCalculatorData?.salePrice, currencySymbol),
    },
    { id: 'referral', label: t('Referral Fee'), currencySymbol: currencySymbol, value: productFees?.referralFees[0], title: productFees?.referralFees[1] },
    { id: 'closing', label: t('Variable Closing Fee'), currencySymbol: currencySymbol, value: productFees?.closingFee, title: null },
    {
      id: 'storage',
      label: t('Storage Fee'),
      currencySymbol: currencySymbol,
      value: profitCalculatorData?.fulfilmentType ? 0 : (productFees?.storageFee * profitCalculatorData?.storageMonth).toFixed(2),
      title: null,
    },
    {
      id: 'prepFee',
      label: t('Prep Fee'),
      currencySymbol: currencySymbol,
      value: profitCalculatorData?.fulfilmentType ? 0 : profitCalculatorData?.prepFee,
      title: null,
    },
  ];

  const vatDue = [
    { label: t('Not Applicable'), value: 0 },
    { label: t('Not Registered'), value: 1 },
    { label: t('VAT Registered'), value: 2 },
    { label: t('Flat Rate'), value: 3 },
  ];

  const handleOnChange = (fieldName, fieldValue) => calculateProfitValues({ [fieldName]: fieldValue }, profitCalculatorData, marketplace, currencySymbol, productData, productFees, offersData, googleShoppingData);

  return (
    <>
      <div className="row g-2">
        {inputFieldValues.map((inputFieldValue, index) => (
          <InputField
            key={index}
            symbol={inputFieldValue.symbol}
            label={inputFieldValue.label}
            id={inputFieldValue.id}
            fieldName={inputFieldValue.fieldName}
            value={inputFieldValue.value}
            handleOnChange={handleOnChange}
            isDisabled={inputFieldValue?.isDisabled}
          />
        ))}
        <RenderIf isTrue={marketplace === usMarketPlace}>
          <InputField symbol="%" label={t('Tax Due')} id="tax_of_profit_calculator" fieldName="taxValue" value={profitCalculatorData?.taxValue} handleOnChange={handleOnChange} />
        </RenderIf>

        <InputToggle id="fba_and_fbm" label={t('Fulfilment Type')} isFBA={true} fieldName="fulfilmentType" value={profitCalculatorData?.fulfilmentType} handleOnChange={handleOnChange} />

        <InputSelect
          options={storageMonthsOptions}
          label={t('Storage Months')}
          fieldName="storageMonth"
          handleOnChange={handleOnChange}
          value={profitCalculatorData?.storageMonth ?? 0}
          isDisabled={profitCalculatorData?.fulfilmentType}
          id="storage_month"
          title={t('Select for how many months you want to store inventory in Amazon\'s warehouse')}
        />

        <RenderIf isTrue={marketplace === ukMarketPlace}>
          <InputSelect options={vatDue} label={t('VAT Scheme')} id="vat_due" fieldName="vatSelect" value={profitCalculatorData?.vatSelect} handleOnChange={handleOnChange} />
        </RenderIf>
      </div>

      <hr className="hr mt-2" />

      <RenderIf isTrue={marketplace === ukMarketPlace && profitCalculatorData?.vatSelect == 1}>
        <InputToggle
          id="vat_due"
          label={t('VAT On Fees')}
          fieldName="isFeeVatApplied"
          value={profitCalculatorData?.isFeeVatApplied}
          handleOnChange={handleOnChange}
          style={{ fontFamily: 'Lato, sans-serif', fontSize: '12px' }}
        />
        <hr className="hr" />
      </RenderIf>

      <div className="d-flex align-items-center justify-content-between my-2">
        <span className="fs-10 ah-custom-label">{t('Profit Margin')}</span>
        <span
          className="fs-12 ah-custom-font-light"
          style={{ color: profitCalculatorData.profitMargin === 0 || isNull(profitCalculatorData.profitMargin) ? 'black' : profitCalculatorData.profitMargin > 0 ? 'green' : 'red' }}
          id="roiOfProfitCalculatorSpanText"
        >
          {parseFloat(profitCalculatorData?.profitMargin).toFixed(2) === 'NaN' ? '∞' : parseFloat(profitCalculatorData?.profitMargin).toFixed(2)} %
        </span>
      </div>

      <hr className="hr mb-2" />
      <div className="d-flex align-items-center justify-content-between my-2">
        <span className="fs-10 ah-custom-label">{t('Profit')}</span>
        <span className="fs-12 ah-custom-font-light" style={{ color: profitCalculatorData.profit > 0 ? 'green' : 'red' }} id="profitOfProfitCalculatorSpan">
          {currencySymbol + ' ' + parseFloat(profitCalculatorData.profit).toFixed(2)}
        </span>
      </div>

      <hr className="hr mb-2" />

      <div className="d-flex align-items-center justify-content-between mb-2">
        <span className="fs-10 ah-custom-label">{t('ROI')}</span>
        <span
          className="fs-12 ah-custom-font-light"
          style={{ color: profitCalculatorData.ROI === 0 || isNull(profitCalculatorData.ROI) ? 'black' : profitCalculatorData.ROI > 0 ? 'green' : 'red' }}
          id="roiOfProfitCalculatorSpanText"
        >
          {parseFloat(profitCalculatorData?.ROI).toFixed(2) === 'NaN' ? '∞' : parseFloat(profitCalculatorData?.ROI).toFixed(2)} %
        </span>
      </div>

      <hr className="hr mb-2" />

      <RenderIf isTrue={marketplace === ukMarketPlace}>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <span className="fs-10 ah-custom-label">{t('VAT Due')}</span>
          <span className="fs-12 ah-custom-font-light" style={{ color: 'black' }} id="vatOfProfitCalculator">
            {currencySymbol + ' ' + parseFloat(profitCalculatorData?.vatFees).toFixed(2)}
          </span>
        </div>

        <hr className="hr mb-2" />
      </RenderIf>

      <DetailPageInnerDropDowns id="max_cost" value={profitCalculatorData?.maxCost} label={t('Maximum Cost')} currencySymbol={currencySymbol}>
        <div className="row pt-1">
          {maxCostInputFieldValues.map((maxCostInputFieldValue, index) => (
            <InputField
              key={index}
              symbol={maxCostInputFieldValue.symbol}
              label={maxCostInputFieldValue.label}
              id={maxCostInputFieldValue.id}
              fieldName={maxCostInputFieldValue.fieldName}
              value={maxCostInputFieldValue.value}
              handleOnChange={handleOnChange}
            />
          ))}
        </div>
      </DetailPageInnerDropDowns>

      <hr className="hr my-2" />

      <DetailPageInnerDropDowns id="fee" label={t('Total Fees')} value={profitCalculatorData?.totalFee} currencySymbol={currencySymbol}>
        {totalFeeDataValues.map((totalFeeDataValue, index) => (
          <TotalFeeData
            key={index}
            id={totalFeeDataValue.id}
            label={totalFeeDataValue.label}
            currencySymbol={totalFeeDataValue.currencySymbol}
            value={totalFeeDataValue.value}
            title={totalFeeDataValue.title}
          />
        ))}
      </DetailPageInnerDropDowns>

      <hr className="hr mb-2" />
      <div className="d-flex align-items-center justify-content-between my-2">
        <span className="fs-10 ah-custom-label">{t('Breakeven Price')}</span>
        <span className="fs-12 ah-custom-font-light" id="profitOfProfitCalculatorSpan">
          {currencySymbol + ' ' + parseFloat(profitCalculatorData?.breakEven).toFixed(2)}
        </span>
      </div>
    </>
  );
};

export default ProfitCalculator;
