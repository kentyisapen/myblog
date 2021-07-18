class AddThumnailToBlogs < ActiveRecord::Migration[5.2]
  def change
    add_column :blogs, :thumnail, :text
    add_column :blogs, :details, :string
  end
end
