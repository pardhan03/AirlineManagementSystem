'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Flights', [
      {
        flightNumber: 'AI-101',
        airplaneId: 1, // Boeing 737
        departureAirportId: 1, // Delhi
        arrivalAirportId: 2, // Mumbai
        arrivalTime: '2026-01-10 10:00:00',
        departureTime: '2026-01-10 08:00:00',
        price: 4500,
        boardingGate: 'A1',
        totalSeats: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: '6E-202',
        airplaneId: 2, // Airbus A320
        departureAirportId: 2, // Mumbai
        arrivalAirportId: 3, // Bengaluru
        arrivalTime: '2026-01-10 14:30:00',
        departureTime: '2026-01-10 12:45:00',
        price: 3200,
        boardingGate: 'B5',
        totalSeats: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'UK-303',
        airplaneId: 3, // Boeing 777
        departureAirportId: 3, // Bengaluru
        arrivalAirportId: 1, // Delhi
        arrivalTime: '2026-01-11 21:00:00',
        departureTime: '2026-01-11 18:30:00',
        price: 5500,
        boardingGate: 'C2',
        totalSeats: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: 'AI-404',
        airplaneId: 4, // Boeing 747
        departureAirportId: 4, // Hyderabad
        arrivalAirportId: 5, // Kolkata
        arrivalTime: '2026-01-12 11:45:00',
        departureTime: '2026-01-12 09:30:00',
        price: 4100,
        boardingGate: 'D10',
        totalSeats: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        flightNumber: '6E-505',
        airplaneId: 5, // Airbus A330
        departureAirportId: 5, // Kolkata
        arrivalAirportId: 1, // Delhi
        arrivalTime: '2026-01-12 19:00:00',
        departureTime: '2026-01-12 16:30:00',
        price: 4800,
        boardingGate: 'E3',
        totalSeats: 160,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
