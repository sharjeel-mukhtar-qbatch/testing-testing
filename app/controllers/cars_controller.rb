class CarsController < ApplicationController
  def index
    @car=Car.all
  end
end
