import bindMenu from "./blocks/menu.js";
import modalCallback from './blocks/modalCallback.js';
import buttonUp from './blocks/buttonUp.js';
import {calcControllers, calcInnerLogic} from './blocks/calculator.js';
import quiz from './blocks/quiz.js';
import bindProject from './blocks/project.js';
import repairSliders from './blocks/repairSliders.js';
import bindConstruction from "./blocks/bindConstruction.js";
import contactsDownMenu from "./blocks/contactsDownMenu.js";

try {
    bindMenu();
}
catch {}

try {
    modalCallback();
}
catch {}

try {
    buttonUp();
}
catch {}

try {
    calcControllers();
}
catch {}

try {
    calcInnerLogic();
}
catch {}

try {
    quiz();
}
catch {}

try {
    bindProject();
}
catch {}

try {
    repairSliders();
}
catch {}

try {
    bindConstruction()
}
catch {}

try {
    contactsDownMenu()
}
catch {}
