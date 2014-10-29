module Apiv1
  class NotesController < ApplicationController
    def index
      notes = Note.all

      render json: notes
    end

    def create
      note = Note.new(note_params)
      if note.save
        render json: note
      else
        render json: note.errors, status: :unprocessable_entity
      end
    end	

    def update
      note = find_note
      if note.update_attributes(note_params)
        render json: note
      else
        render json: note.errors, status: :unprocessable_entity
      end
    end

    def destroy
      note = find_note
      note.destroy
      render json: {msg: 'success'}
    end

  private
    def note_params
      params.require(:note).permit(:note_body)
    end

    def find_note
      Note.find(params[:id])
    end 
  end 
end
