import { create } from 'zustand';

type PickSeatState = {
  seat: Record<string, boolean>;
  toggleSeat(
    seat: {
      x: number;
      y: number;
    },
    isPicked?: boolean
  ): void;
  clear(): void;
  isSelected(seat: { x: number; y: number }): boolean;
};

export const usePickSeat = create<PickSeatState>((set) => ({
  seat: {},
  toggleSeat(seat, isPicked = false) {
    set((state) => {
      if (isPicked !== undefined) {
        state.seat[hash(seat)] = isPicked;
        return {
          seat: { ...state.seat },
        };
      }

      if (state.seat[hash(seat)]) {
        delete state.seat[hash(seat)];
      } else {
        state.seat[hash(seat)] = true;
      }

      return {
        seat: { ...state.seat },
      };
    });
  },

  clear() {
    set({ seat: {} });
  },
  isSelected(seat) {
    return Boolean(this.seat[hash(seat)]);
  },
}));

function hash(seat: { x: number; y: number }) {
  return `${seat.x}#${seat.y}`;
}
