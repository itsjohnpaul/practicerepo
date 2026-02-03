import { useState } from "react";
import umrahData from "../data/umrahData";
import type { UmrahRequest, UmrahStatus } from "../data/umrahData";

export type Tab = "All" | UmrahStatus;
export type VipFilter = "All" | "VIP" | "Non-VIP";

export const useUmrahFilters = () => {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [statusFilter, setStatusFilter] =
    useState<"All" | UmrahStatus>("All");
  const [vipFilter, setVipFilter] = useState<VipFilter>("All");
  const [search, setSearch] = useState("");

  const filteredData: UmrahRequest[] = umrahData.filter(item => {
    if (activeTab !== "All" && item.status !== activeTab) return false;

    if (statusFilter !== "All" && item.status !== statusFilter) return false;

    if (
      vipFilter !== "All" &&
      (vipFilter === "VIP"
        ? item.umrahFor.type !== "VIP User"
        : item.umrahFor.type !== "Normal User")
    ) {
      return false;
    }

    if (
      search &&
      !item.umrahFor.name.toLowerCase().includes(search.toLowerCase()) &&
      !item.requestId.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  const resetFilters = (tab: Tab) => {
    setActiveTab(tab);
    setStatusFilter("All");
    setVipFilter("All");
    setSearch("");
  };

  return {
    activeTab,
    statusFilter,
    vipFilter,
    search,
    setActiveTab,
    setStatusFilter,
    setVipFilter,
    setSearch,
    filteredData,
    resetFilters,
    tabs: [
      "All",
      "Performer Not Assigned",
      "Performer Requested",
      "Performer Accepted",
      "Umrah In Progress",
      "Umrah Completed",
    ] as Tab[],
  };
};
