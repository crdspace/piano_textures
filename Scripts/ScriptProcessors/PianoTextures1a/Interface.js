Content.makeFrontInterface(1200, 800);

//Get sampler
const var samplerHorsehairLayer1 = Synth.getChildSynth("samplerHorsehairLayer1");
//GUI
const var btnPurge = [];

for (i = 0; i < 4; i++)
{
    btnPurge[i] = Content.getComponent("btnPurge" + i);
    btnPurge[i].setControlCallback(purgeMicPosition);
    
}

//Purge button callback
inline function purgeMicPosition(component, value)
{
    local idx = btnPurge.indexOf(component);

    local micName = samplerHorsehairLayer1.asSampler().getMicPositionName(idx);
    
    samplerHorsehairLayer1.asSampler().purgeMicPosition(micName, value);   
}function onNoteOn()
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
 