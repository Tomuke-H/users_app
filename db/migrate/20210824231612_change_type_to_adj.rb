class ChangeTypeToAdj < ActiveRecord::Migration[6.1]
  def change
    rename_column :birds, :type, :adj
  end
end
