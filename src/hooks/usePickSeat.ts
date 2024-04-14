import { create } from 'zustand';

type PickSeatState = {
  seats: Array<[number, number]>;
  toggleSeat(seat: [number, number], isPicked?: boolean): void;
  clear(): void;
};

export const usePickSeat = create<PickSeatState>((set) => ({
  seats: [],
  toggleSeat(seat, isPicked) {
    set((state) => {
      if (isPicked !== undefined) {
        if (isPicked) {
          return {
            seats: [...state.seats, seat],
          };
        }

        return {
          seats: state.seats.filter(
            (s) => s[0] !== seat[0] || s[1] !== seat[1]
          ),
        };
      }

      const found = state.seats.find(
        (s) => s[0] === seat[0] && s[1] === seat[1]
      );

      if (found) {
        return {
          seats: state.seats.filter(
            (s) => s[0] !== seat[0] || s[1] !== seat[1]
          ),
        };
      }

      return {
        seats: [...state.seats, seat],
      };
    });
  },
  clear() {
    set({ seats: [] });
  },
}));
