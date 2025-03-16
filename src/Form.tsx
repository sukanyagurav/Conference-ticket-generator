import { useState } from 'react';
import Input from './Input';
import {
  checkName,
  checkEmail,
  checkUsername,
  checkAvatar,
} from './utilis/checker.ts';
import { useNavigate } from 'react-router-dom';
const Form = () => {
  let navigate = useNavigate();
  const [ticket, setTicket] = useState({
    avatar: null as File | null,
    fullName: '',
    email: '',
    username: '@',
    ticketNumber: 0,
  });
  const [error, setError] = useState({
    avatar: '',
    fullName: '',
    email: '',
    username: '',
  });
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTicket({
      ...ticket,
      [event.target.id]:
        event.target.id == 'avatar'
          ? event.target.files?.[0] || null
          : event.target.value,
    });
    if (event.target.id == 'username') {
      setTicket({
        ...ticket,
        [event.target.id]: event.target.value.startsWith('@')
          ? event.target.value
          : `@${event.target.value}`,
      });
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const newErrors = {
      ...error,
      ...checkName(ticket.fullName),
      ...checkEmail(ticket.email),
      ...checkUsername(ticket.username),
      ...checkAvatar(ticket.avatar),
    };
    setError(newErrors);
    if (
      !newErrors.avatar &&
      !newErrors.fullName &&
      !newErrors.email &&
      !newErrors.username
    ) {
      navigate('/success', {
        state: {
          ticket: {
            ...ticket,
            ticketNumber: Math.floor(
              Date.now() % Math.pow(10, Math.floor(Math.random() * 6) + 1)
            ),
          },
        },
      });
    }
  }
  return (
    <section className="p-4">
      <h1 className="text-3xl md:text-5xl text-center max-w-[800px] mx-auto mb-4 font-[800]">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className="text-neutral-3 text-center text-lg">
        Secure your spot at next year's biggest coding conference.
      </p>
      <form
        className="max-w-[500px] mx-auto w-full"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="relative w-full mt-8 mb-44 md:mb-38 file-wrapper">
          <Input
            type="file"
            accept="image/png, image/jpeg"
            id="avatar"
            onChange={(e) => onChange(e)}
            text="Upload Avatar"
            placeholder="Drag and drop or click to upload"
            classes="opacity-0 py-20 px-8 md:p-14 absolute w-full z-3 cursor-pointer"
            message={error.avatar}
          />
          <div
            className={`border-dashed border-2  file  py-20 px-8 md:p-16 absolute top-8  w-full h-full flex justify-center flex-col items-center  z-2 rounded-xl text-center ${
              error.avatar ? 'border-orange-700' : 'border-neutral-3'
            } `}
          >
            {ticket.avatar ? (
              <img
                src={URL.createObjectURL(ticket.avatar)}
                alt="Preview"
                className="w-16 h-16 object-cover rounded-xl"
              />
            ) : (
              <img
                src="/public/images/icon-upload.svg"
                alt="Upload placeholder"
              />
            )}
            <p className="text-xl">Drag and drop or click to upload</p>
          </div>
        </div>
        <Input
          type="text"
          id="fullName"
          value={ticket.fullName}
          onChange={(e) => onChange(e)}
          text="Full Name"
          placeholder="Full Name"
          message={error.fullName}
        />

        <Input
          type="email"
          id="email"
          value={ticket.email}
          onChange={(e) => onChange(e)}
          text="Email"
          placeholder="example@example.com"
          message={error.email}
        />
        <Input
          type="text"
          id="username"
          value={ticket.username}
          onChange={(e) => onChange(e)}
          text="Username"
          placeholder="@username"
          message={error.username}
        />

        <button
          type="submit"
          className="p-3 mt-10 text-black transition duration-400 btn  font-bold text-xl cursor-pointer bg-orange-500 block w-full rounded-lg hover:bg-orange-700"
        >
          Generate My Ticket
        </button>
      </form>
    </section>
  );
};

export default Form;
