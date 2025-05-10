
import React, { createContext, useState, useContext } from 'react';

type PlanType = 'Simple Landing Page' | 'Landing Page with Admin' | 'Full Website Including Admin' | '';

interface PricingContextType {
  selectedPlan: PlanType;
  setSelectedPlan: (plan: PlanType) => void;
}

const PricingContext = createContext<PricingContextType>({
  selectedPlan: '',
  setSelectedPlan: () => {}
});

export const usePricing = () => useContext(PricingContext);

export const PricingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('');

  return (
    <PricingContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </PricingContext.Provider>
  );
};
