const MarkCard = ({ mark, onDelete, onEdit }) => {
  return (
    <div className="card-item">
      <span>{mark.Mark}</span>
      <div className="actions">
        <button className="btn-edit" onClick={() => onEdit(mark)}>Editar</button>
        <button className="btn-delete" onClick={() => onDelete(mark._id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default MarkCard;
