
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type PlanType = {
  name: string;
  price: string;
};

type PricingContextType = {
  selectedPlan: PlanType | null;
  setSelectedPlan: (plan: PlanType | null) => void;
};

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export const PricingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);

  return (
    <PricingContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </PricingContext.Provider>
  );
};

export const usePricing = (): PricingContextType => {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error('usePricing must be used within a PricingProvider');
  }
  return context;
};
