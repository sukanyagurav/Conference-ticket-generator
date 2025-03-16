import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const ticket = location.state.ticket;
  return (
    <section className="text-center p-4">
      <h1 className="text-3xl md:text-5xl text-center max-w-[800px] mx-auto mb-4 font-[800]">
        Congrats,{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gradient-1 to-gradient-2">
          {ticket.fullName}!
        </span>
        <br /> Your ticket is ready.
      </h1>
      <p className="max-w-[400px] w-full mx-auto my-4 text-lg">
        We've emailed your ticket to{' '}
        <span className="!text-orange-500">{ticket.email}</span> and will send
        updates in the run up to the event.
      </p>
      <div className="!text-justify  min-w-[330px] w-full relative flex gap-4 md:max-w-[500px] md:mx-auto h-[350px]">
        <img
          src="/images/pattern-ticket.svg"
          alt="ticket background"
          className="absolute inset-0 w-full  top-0 bottom-0 left-0 h-[340px] "
        />
        <div className="absolute top-28 left-8 z-10 bottom-0 md:top-22 md:left-10 ">
          <div>
            <img
              src="/images/logo-full.svg"
              alt="logo"
              className="row-start-1 row-end-3 block w-[180px]"
            />
            <h2 className="ml-8 text-md mb-4 md:text-xl mt-2">
              Jan 31,2025 / Austin,Tx
            </h2>
          </div>
          <div className="flex gap-2 md:mt-12 md:gap-4">
            <img
              src={URL.createObjectURL(ticket.avatar)}
              className="w-[50px] h-[50px] rounded-md md:w-[65px] md:h-[65px] border-3 border-neutral"
            />
            <div>
              <h3 className={`font-[800] text-lg relative group hover:text-orange-700`}>
                {' '}
                <span className='md:hidden'>
                  {ticket.fullName.length > 15
                    ? `${ticket.fullName.slice(0, 15)}...`
                    : ticket.fullName}
                </span>
                <span className='hidden md:block'>
                  {ticket.fullName.length > 25
                    ? `${ticket.fullName.slice(0, 25)}...`
                    : ticket.fullName}
                </span>
                <span
                  className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 
                       w-max px-2 py-1 text-sm !text-orange-500 bg-neutral rounded-md opacity-0 
                       group-hover:opacity-100 transition-opacity duration-300 
                       group-focus:opacity-100 group-active:opacity-100"
                >
                  {ticket.fullName}
                </span>
              </h3>
              <p className="flex gap-1 items-center ">
                <img
                  src="/images/icon-github.svg"
                  alt="github logo"
                />
                <span className="text-neutral-2">{ticket.username}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -right-2 top-38 text-lg  rotate-90 md:right-2">
          <span className="tracking-[4px]">
            #{ticket.ticketNumber.toString().padStart(6, '0')}
          </span>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
