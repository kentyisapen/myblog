class AddColumnSummary < ActiveRecord::Migration[5.1]
  def change
    add_column :blogs, :summary, :text
  end
end
