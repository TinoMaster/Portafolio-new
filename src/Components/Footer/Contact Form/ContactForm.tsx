import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el comentario o realizar la acción que desees con los datos del formulario.
    // Puedes usar una API o enviar un correo electrónico, por ejemplo.
  };

  return (
    <div className="p-2 text-sm">
      <h2 className="text-2xl font-bold mb-4">¡Contáctame!</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        <div className="col-span-2 lg:col-span-1">
          <label htmlFor="name" className="block text-gray-400">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 shadow-inner rounded-md focus:outline-none focus:border-primary bg-white/5"
            required
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <label htmlFor="email" className="block text-gray-400">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 shadow-inner rounded-md focus:outline-none focus:border-primary bg-white/5"
            required
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="message" className="block text-gray-400">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 resize-none overflow-auto shadow-inner rounded-md focus:outline-none focus:border-primary bg-white/5"
            required
          ></textarea>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-primary/70 text-white font-semibold py-2 px-4 rounded-md hover:bg-primary"
          >
            Enviar Comentario
          </button>
        </div>
      </form>
    </div>
  );
};
