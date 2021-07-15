class AddIdDigestToBlogs < ActiveRecord::Migration[5.2]
  def change
    add_column :blogs, :id_digest, :string
  end
end
