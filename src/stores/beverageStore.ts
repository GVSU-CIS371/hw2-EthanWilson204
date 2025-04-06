import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import { BeverageType } from "../types/beverage";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCreamer: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    currentName: "",
    bevarages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
  }),

  actions: {
    makeBeverage() {
      this.currentBeverage = {
        name: this.currentName,
        id: `${this.currentTemp}-${this.currentBase.id}-${this.currentCreamer.id}-${this.currentSyrup.id}`,
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer,
      };
      this.bevarages.push({
        name: this.currentName,
        id: `${this.currentTemp}-${this.currentBase.id}-${this.currentCreamer.id}-${this.currentSyrup.id}`,
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer,
      });
      console.log(`currentBeverage${this.currentBeverage}`);

      console.log(`beverages ${this.bevarages}`);
    },
    showBeverage() {
      // use the id to get the beverage object
      // this.currentBase = this.currentBeverage?.base
    },
  },
  persist: true,
});
