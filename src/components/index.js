import FormGroupInput from "./Inputs/formGroupInput.vue";

import DropDown from "./Dropdown.vue";
import PaperTable from "./PaperTable.vue";
import Button from "./Button";

import Card from "./Cards/Card.vue";
import StatsCard from "./Cards/StatsCard.vue";

import SidebarPlugin from "./SidebarPlugin/index";

let components = {
	FormGroupInput,
	Card,
	StatsCard,
	PaperTable,
	DropDown,
	SidebarPlugin,
};

export default components;

export { FormGroupInput, Card, StatsCard, PaperTable, DropDown, Button, SidebarPlugin };
