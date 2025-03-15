import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';

const Success = () => {
  const location = useLocation();
  const ticket = location.state.ticket;
  console.log(ticket);
  return (
    <section className="text-center p-4">
      <h1 className="text-3xl md:text-5xl text-center max-w-[800px] mx-auto mb-4 font-[800]">
        Congrats, <span className="!text-gradient">{ticket.fullName}!</span>
        <br /> Your ticket is ready.
      </h1>
      <p className="max-w-[400px] w-full mx-auto my-4">
        We've emailed your ticket to <span>{ticket.email}</span> and will send
        updates in the run up to the event.
      </p>
      <div className="!text-justify ticket p-4 min-w-[300px] ">
        <div>
          <div>
            <img
              src="/images/logo-full.svg"
              alt="logo"
              className="row-start-1 row-end-3 block w-[180px]"
            />
            <h2 className="ml-8 text-md mb-4">Jan 31,2025 / Austin,Tx</h2>
          </div>
          <div className=" grid grid-cols-[70px_minmax(200px,_1fr)]">
            <img
              src={ticket.avatar}
              className="w-[60px] h-[50px]"
            />
            <div>
              <h3 className="text-xl font-[800]">{ticket.fullName}</h3>
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
        
      </div>
    </section>
  );
};

export default Success;
