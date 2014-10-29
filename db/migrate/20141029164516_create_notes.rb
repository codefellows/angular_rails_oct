class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :note_body

      t.timestamps
    end
  end
end
