import { useState } from 'react';
import Input from './Input';

function App() {
  const [ticket, setTicket] = useState({
    avatar: '',
    type: '',
    fullName: '',
    email: '',
    username: '@',
  });

  function onChange(event: any) {
    setTicket({ ...ticket, [event.target.id]: event.target.value });
  }
  return (
    <>
      <header className="max-w-[1000px] mx-auto p-8">
        <img
          src="/images/logo-full.svg"
          alt="logo"
          className="mx-auto"
        />
      </header>
      <main className="max-w-[1000px] mx-auto p-8 text-neutral flex flex-col justify-center items-center">
        <section>
          <h1 className="text-3xl text-center">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <p className="text-neutral-3">
            Secure your spot at next year's biggest coding conference.
          </p>
          <form className='max-w-[500px] mx-auto mt-8'>
            <div>
              <Input
                type="file"
                accept="image/png, image/jpeg"
                id="avatar"
                value={ticket.avatar}
                onChange={(e) => onChange(e)}
                text="Upload Avatar"
                placeholder='Drag and drop or click to upload'
              />
            </div>
            <Input
              type="text"
              id="fullName"
              value={ticket.fullName}
              onChange={(e) => onChange(e)}
              text="Full Name"
                placeholder='Full Name'
            />

            <Input
              type="email"
              id="email"
              value={ticket.email}
              onChange={(e) => onChange(e)}
              text="Email"
                placeholder='example@example.com'
            />
            <Input
              type="text"
              id="username"
              value={ticket.username}
              onChange={(e) => onChange(e)}
              text="Username"
                placeholder='@username'
            />

            <button className='p-3 mt-10 text-black font-bold text-xl cursor-pointer bg-orange-500 block w-full rounded-lg'>Generate My Ticket</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
