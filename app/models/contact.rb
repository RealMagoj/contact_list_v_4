class Contact < ActiveRecord::Base

  def self.create(name, email, created_at)
    new_contact = Contact.new(name, email, created_at)
    new_contact.save
    new_contact
  end

end