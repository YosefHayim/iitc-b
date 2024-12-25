import React from "react";
import CustomerSuccess from "./CustomerSuccess/CustomerSuccess";
import TopJobCategories from "./TopJobCategories/TopJobCategories";
import ProductDesigner from "./ProductDesigner/ProductDesigner";
import ProductDesignerManager from "./ProductDesignerManager/ProductDesignerManager";
import DesignerEngineer from "./DesignerEngineer/DesignerEngineer";
import MoreEfficient from "./MoreEfficient/MoreEfficient";

const StatisticsData = () => {
  return (
    <div>
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
