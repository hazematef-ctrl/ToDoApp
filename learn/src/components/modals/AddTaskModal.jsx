export const AddTaskModal = ({ isOpen, onClose, children, title }) => {
  return (
    <div className={`fixed inset-0 z-100 flex items-center  justify-center p-4 transition-all duration-300 ${
      isOpen ? "visible opacity-100" : "invisible opacity-0"
    }`}>
      

      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 

      />
      
 
      <div className={`relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 transition-all duration-300 transform ${
        isOpen ? "translate-y-0 scale-100 opacity-100" : "-translate-y-20 scale-95 opacity-0"
      }`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-center w-full">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black cursor-pointer text-2xl">✕</button>
        </div>
        
        {children}
      </div>
    </div>
  );
};