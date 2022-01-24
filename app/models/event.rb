class Event < ApplicationRecord


    # validates :start_date, comparison: { greater_than: :end_date }
    validates :etitle, comparison: { greater_than: :ebody }




    # has_many :reviews, as: :reviewable, inverse_of: :event
    # # validates :etitle, presence: true
    # validates :etitle, presence: false
    # #  before_validation :normalize_name, on: :create
    # # after_validation :normalize_name, on: :create
    # # after_save :normalize_name, on: :create
    # # before_save :normalize_name, on: :create
    # # around_save :normalize_name, on: :create
    # # before_destroy :etitle, length: { maximum: 2 }
    # after_touch do |user|
    #     puts "You have touched an object"
    #   end
    # after_initialize do |user|
    #     puts "You have initialized an object!"
    #   end
    
    #   after_find do |user|
    #     puts "You have found an object!"
    #   end

    # around_destroy do |record|
    #     puts "start of destroy callback"
    #     record.etitle = 'mm'
    #     record.save
    #     yield
    #     puts "end of destroy callback"
    # end

    # after_rollback do |record|
    #     puts "rollback"
    #     puts "rollback"
    #     puts "rollback"
    #     puts "rollback"
    #     puts "rollback"
    #     puts "rollback"
    #     puts "rollback"
    #     puts "rollback"
    #     puts "rollback"
    #     puts "rollback"
    # end

    # private
    # def normalize_name
    #     self.etitle = etitle.downcase.titleize
    #   end
end
