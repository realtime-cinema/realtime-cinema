import { create } from 'zustand';

type PickSeatState = {
  seats: Array<[number, number]>;
  setSeat(seat: [number, number], isPicked: boolean): void;
};

export const usePickSeat = create<PickSeatState>((set) => ({
  seats: [],
  setSeat(seat, isPicked) {
    set((state) => {
      if (isPicked) {
        return { seats: [...state.seats, seat] };
      }

      return {
        seats: state.seats.filter((s) => s[0] !== seat[0] || s[1] !== seat[1]),
      };
    });
  },
}));
