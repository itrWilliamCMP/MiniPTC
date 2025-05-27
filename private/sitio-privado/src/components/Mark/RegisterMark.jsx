import { useState } from 'react';
import toast from 'react-hot-toast';

const RegisterMark = ({ onAdd }) => {
  const [mark, setMark] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mark.trim()) {
      toast.error('El nombre de la marca es obligatorio');
      return;
    }
    await onAdd({ Mark: mark });
    setMark('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-register">
      <input
        type="text"
        placeholder="Nombre de la marca"
        value={mark}
        onChange={(e) => setMark(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="btn-add">Agregar Marca</button>
    </form>
  );
};

export default RegisterMark;
