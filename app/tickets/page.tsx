import React from "react";
import prisma from "@/prisma/db";
import TicketTable from "./TicketTable";

const Tickets = async () => {
  const tickets = await prisma.ticket.findMany();

  console.log(tickets);
  return (
    <div>
      <TicketTable tickets={tickets} />
    </div>
  );
};

export default Tickets;
