Content.makeFrontInterface(738, 460);;

// SHOW CURRENT PRESET NAME IN A LABEL
const var PresetName = Content.getComponent("PresetName");

inline function onKnob1Control(component, value)
{
    if (Engine.getCurrentUserPresetName() == "")
        Content.getComponent("PresetName").set("text", "Init");
    else
        Content.getComponent("PresetName").set("text", Engine.getCurrentUserPresetName());
};

Content.getComponent("Knob1").setControlCallback(onKnob1Control);

    // Default Fonts

Engine.loadFontAs("{PROJECT_FOLDER}calibrib.ttf", "calibrib");
Engine.setGlobalFont("calibrib");        


    // Convolution and EQ setup

const var EQ = Engine.addModuleStateToUserPreset("EQ");

const var Convolution = Synth.getAudioSampleProcessor("CONVOLUTION");

Engine.loadAudioFilesIntoPool();
const var CONVOBOX = Content.getComponent("CONVOBOX");
CONVOBOX.setControlCallback(loadImpulse);

inline function loadImpulse(control, value)
{
    Convolution.setFile("{PROJECT_FOLDER}"+ control.getItemText() + ".wav");
}

    // Samplemaps setup and config
        
        // E1
        
const var E1 = Synth.getSampler("E1 - BODY");
const var sampleMaps1 = ["PIANO 1", "PIANO 2 ECO", "PIANO 3 SOFT", "RESONANCES", "NOISES"];

const var E1Model = Content.getComponent("E1MODELSELECT");
E1Model.set("items", sampleMaps1.join("\n"));

inline function onE1ModelControl(component, value)
{
	E1.loadSampleMap(sampleMaps1[value-1]);
};

Content.getComponent("E1MODELSELECT").setControlCallback(onE1ModelControl);
        
        // E2
        
const var E2 = Synth.getSampler("E2 - RESO");
const var sampleMaps2 = ["PIANO 1", "PIANO 2 ECO", "PIANO 3 SOFT", "RESONANCES", "NOISES"];

const var E2Model = Content.getComponent("E2MODELSELECT");
E2Model.set("items", sampleMaps2.join("\n"));

inline function onE2ModelControl(component, value)
{
	E2.loadSampleMap(sampleMaps2[value-1]);
};

Content.getComponent("E2MODELSELECT").setControlCallback(onE2ModelControl);        

        // E3
        
const var E3 = Synth.getSampler("E3 - NOISE");
const var sampleMaps3 = ["PIANO 1", "PIANO 2 ECO", "PIANO 3 SOFT", "RESONANCES", "NOISES"];

const var E3Model = Content.getComponent("E3MODELSELECT");
E3Model.set("items", sampleMaps3.join("\n"));

inline function onE3ModelControl(component, value)
{
	E3.loadSampleMap(sampleMaps3[value-1]);
};

Content.getComponent("E3MODELSELECT").setControlCallback(onE3ModelControl);        


        // E1 filter combobox setup
          
const var E1FILTER = Synth.getEffect("E1 FILTER");

const var modes = {"_1POLE LP": 9,"_1POLE HP": 10, "_BIQUAD LP": 0, "_BIQUAD HP": 1, "_SVF LP": 6,"_SVF HP": 7,"_MOOG LP": 8, "_BIQUAD REZ": 5, "_LADDER 4P": 14, "_LO SHELF": 2, "_HI SHELF": 3, "_PEAK EQ": 4, "_ALLPASS": 13, "_RINGMOD": 17,};

const var E1FilterSelect = Content.getComponent("E1FILTERSELECT");

E1FilterSelect.set("items", ""); //Clear list

for (k in modes)
{
    E1FilterSelect.addItem(k); //Add mode name to list
}

inline function onE1FilterSelectControl(component, value)
{
    E1FILTER.setAttribute(E1FILTER.Mode, modes[component.getItemText()]);
};

Content.getComponent("E1FILTERSELECT").setControlCallback(onE1FilterSelectControl);

          // E2 filter combobox setup
          
const var E2FILTER = Synth.getEffect("E2 FILTER");

const var modes2 = {"_1POLE LP": 9,"_1POLE HP": 10, "_BIQUAD LP": 0, "_BIQUAD HP": 1, "_SVF LP": 6,"_SVF HP": 7,"_MOOG LP": 8, "_BIQUAD REZ": 5, "_LADDER 4P": 14, "_LO SHELF": 2, "_HI SHELF": 3, "_PEAK EQ": 4, "_ALLPASS": 13, "_RINGMOD": 17,};

const var E2FilterSelect = Content.getComponent("E2FILTERSELECT");

E2FilterSelect.set("items", ""); //Clear list

for (k in modes)
{
    E2FilterSelect.addItem(k); //Add mode name to list
}

inline function onE2FilterSelectControl(component, value)
{
    E2FILTER.setAttribute(E2FILTER.Mode, modes2[component.getItemText()]);
};

Content.getComponent("E2FILTERSELECT").setControlCallback(onE2FilterSelectControl);

          // E3 filter combobox setup
          
const var E3FILTER = Synth.getEffect("E3 FILTER");

const var modes3 = {"_1POLE LP": 9,"_1POLE HP": 10, "_BIQUAD LP": 0, "_BIQUAD HP": 1, "_SVF LP": 6,"_SVF HP": 7,"_MOOG LP": 8, "_BIQUAD REZ": 5, "_LADDER 4P": 14, "_LO SHELF": 2, "_HI SHELF": 3, "_PEAK EQ": 4, "_ALLPASS": 13, "_RINGMOD": 17,};

const var E3FilterSelect = Content.getComponent("E3FILTERSELECT");

E3FilterSelect.set("items", ""); //Clear list

for (k in modes)
{
    E3FilterSelect.addItem(k); //Add mode name to list
}

inline function onE3FilterSelectControl(component, value)
{
    E3FILTER.setAttribute(E3FILTER.Mode, modes3[component.getItemText()]);
};

Content.getComponent("E3FILTERSELECT").setControlCallback(onE3FilterSelectControl);


        // SHOW EDITOR PANEL
 
const var EDITButton= Content.getComponent("EDITOR SWPBTTN");
const var EDITORPANEL = Content.getComponent("EDITOR PANEL");

inline function onEDITButtonControl(component, value)
{
	if (value)
    {
        EDITORPANEL.showControl(true);
    }
    else
    {
        EDITORPANEL.showControl(false);
    }
};

Content.getComponent("EDITOR SWPBTTN").setControlCallback(onEDITButtonControl);

        
        // EQ EDITOR PANEL
 
const var EQButton= Content.getComponent("EQ SWPBTTN");
const var EQPANEL = Content.getComponent("EQ PANEL");

inline function onEQButtonControl(component, value)
{
	if (value)
    {
        EQPANEL.showControl(true);
    }
    else
    {
        EQPANEL.showControl(false);
    }
};

Content.getComponent("EQ SWPBTTN").setControlCallback(onEQButtonControl);

    // SETTINGS PANEL
 
const var SETTButton= Content.getComponent("SETTINGS SWPBTTN");
const var SETTPANEL = Content.getComponent("SETTINGS PANEL");

inline function onSETTButtonControl(component, value)
{
	if (value)
    {
        SETTPANEL.showControl(true);
    }
    else
    {
        SETTPANEL.showControl(false);
    }
};

Content.getComponent("SETTINGS SWPBTTN").setControlCallback(onSETTButtonControl);

    // KEYBOARD PANEL
 
const var KEYButton= Content.getComponent("KEY BUTTON");
const var KEYPANEL = Content.getComponent("KEYBOARD PANEL");

inline function onKEYButtonControl(component, value)
{
	if (value)
    {
        KEYPANEL.showControl(true);
    }
    else
    {
        KEYPANEL.showControl(false);
    }
};

Content.getComponent("KEY BUTTON").setControlCallback(onKEYButtonControl);

    // PRESET LIBRARY BROWSER
 
const var LIBPanel = Content.getComponent("LIBRARY PANEL");
const var LIBButton = Content.getComponent("LIBRARY BUTTON");
LIBButton.setControlCallback(LIBButtonCB);

inline function LIBButtonCB(control, value)
{
    LIBPanel.showControl(value);
}

    // ABOUT PANEL
 
const var ABOUTPanel = Content.getComponent("ABOUT PANEL");
const var ABOUTButton = Content.getComponent("ABOUT BUTTON");
ABOUTButton.setControlCallback(ABOUTButtonCB);

inline function ABOUTButtonCB(control, value)
{
    ABOUTPanel.showControl(value);
}
function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 