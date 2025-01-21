import React from "react";
import CustomerSuccess from "./CustomerSuccess/CustomerSuccess";
import TopJobCategories from "./TopJobCategories/TopJobCategories";
import ProductDesigner from "./ProductDesigner/ProductDesigner";
import ProductDesignerManager from "./ProductDesignerManager/ProductDesignerManager";
import DesignerEngineer from "./DesignerEngineer/DesignerEngineer";
import MoreEfficient from "./MoreEfficient/MoreEfficient";

const StatisticsData = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-[3em]">
      <CustomerSuccess />
      <DesignerEngineer />
      <MoreEfficient />
      <ProductDesigner />
      <ProductDesignerManager />
      <TopJobCategories />
    </div>
  );
};

export default StatisticsData;
