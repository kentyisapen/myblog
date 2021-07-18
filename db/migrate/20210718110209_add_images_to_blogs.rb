class AddImagesToBlogs < ActiveRecord::Migration[5.2]
  def change
    add_column :blogs, :image, :string
    add_column :blogs, :detail, :string
  end
end
