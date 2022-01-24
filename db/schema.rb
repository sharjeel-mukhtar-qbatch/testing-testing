# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_19_111540) do

  create_table "assembliesofcars", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.integer "abc_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["abc_id"], name: "index_assembliesofcars_on_abc_id"
  end

  create_table "cars", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "body"
    t.string "body_confirmation"
  end

  create_table "events", force: :cascade do |t|
    t.string "etitle"
    t.text "ebody"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "likes", force: :cascade do |t|
    t.string "liketitle"
    t.integer "likes_id"
    t.integer "model_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["likes_id"], name: "index_likes_on_likes_id"
    t.index ["model_id"], name: "index_likes_on_model_id"
  end

  create_table "models", force: :cascade do |t|
    t.string "mtitle"
    t.integer "models_id"
    t.integer "car_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["car_id"], name: "index_models_on_car_id"
    t.index ["models_id"], name: "index_models_on_models_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "producttitle"
    t.integer "pricing_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pricing_id"], name: "index_products_on_pricing_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "restauranttitle"
    t.text "restaurantbody"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string "rtitle"
    t.text "rbody"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "reviewable_type", null: false
    t.integer "reviewable_id", null: false
    t.index ["reviewable_type", "reviewable_id"], name: "index_reviews_on_reviewable"
  end

  create_table "shippings", force: :cascade do |t|
    t.string "type"
    t.string "title"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "assembliesofcar_id"
    t.index ["assembliesofcar_id"], name: "index_shippings_on_assembliesofcar_id"
  end

  add_foreign_key "assembliesofcars", "assembliesofcars", column: "abc_id"
  add_foreign_key "likes", "likes", column: "likes_id"
  add_foreign_key "likes", "models"
  add_foreign_key "models", "cars"
  add_foreign_key "models", "models", column: "models_id"
  add_foreign_key "products", "products", column: "pricing_id"
  add_foreign_key "shippings", "assembliesofcars"
end
