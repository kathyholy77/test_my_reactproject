import React from 'react';

interface CreateItemModalProps {
    category: string;
    onClose: () => void;
    onSubmit: (e: React.FormEvent) => void;
    formData: { name: string, description: string };
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const CreateItemModal: React.FC<CreateItemModalProps> = ({ category, onClose, onSubmit, formData, onInputChange }) => {
    return (
      <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2 id="modal-title">Create a New {category} Item</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={onInputChange} required autoFocus />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description (Optional)</label>
              <textarea id="description" name="description" value={formData.description} onChange={onInputChange} rows={3} />
            </div>
            <div className="modal-actions">
              <button type="button" className="modal-btn cancel" onClick={onClose}>Cancel</button>
              <button type="submit" className="modal-btn submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default CreateItemModal;