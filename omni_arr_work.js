// // Use for setting a value on an Input Field
// input:  #holderVictim\[0\]\.nmatName\.businessName 
// output: document.querySelector("#holderVictim\\[0\\]\\.nmatName\\.businessName").value= value
function setValue(selector, value) {
	if(value === '' || value === ' ' || value === undefined) return '';
	const outStr = selector.split('\\').join('\\\\');
	return `document.querySelector("${outStr}").value=` + `'${value}';`;
  }
  
  // Use for setting a value on a Dropdown List or Input box
  // input:  #holderVictim\[0\]\.nmatName\.businessName 
  // output: document.querySelector("#holderVictim\\[0\\]\\.nmatName\\.businessName").options.selectedIndex = value
  function setOption(selector, value) {
	if(value === '' || value === ' ' || value === 'Off' || value === undefined) return '';
	const outStr = selector.split('\\').join('\\\\');
	return `document.querySelector("${outStr}").options.selectedIndex=` + `${value};`
  }
  
  // Use for checking a Checkbox
  function setCheckbox(selector, value) {
	if(value === '' || value === ' ' || value === 'Off' || value === undefined) return '';
	const outStr = selector.split('\\').join('\\\\');
	return `document.querySelector("${outStr}").checked=` + `${value};`;
  }

// Enable a text field
function enableTextField(selector) {
	if(selector === '' || selector === null || selector === undefined) return '';
	const outStr = selector.split('\\').join('\\\\');
	return `document.querySelector("${outStr}").removeAttribute(\"disabled\");`;
}

function setValueEscapeChar(selector, value) {
	if(value === '' || value === ' ' || value === undefined) return '';
	const outStr = selector.split('\\').join('\\\\');
	return `document.querySelector("${outStr}").value=` + `\`${value}\`;`;
  }

function getChart(squad) {
	const squadLetter = this.getField(squad).value;
	const letter = squadLetter.charAt(0);
	switch (letter) {
		case '': return '';
			break;
		case 'A': return '5';
			break;
		case 'B': return '44';
			break;
		case 'C': return '43';
			break;
		default: return '';
	}
}

function getCounty(county) {
	switch (this.getField(county).value) {
	  case '': return '';
		break;
	  case 'BRONX': return '1';
		break;
	  case 'KINGS': return '2';
		break;
	  case 'MANHATTAN': return '3';
		break;
	  case 'QUEENS': return '4';
		break;
	  case 'RICHMOND': return '5';
		break;
	  default: return '';
	}
  }
  
  function getCity(city) {
	switch (this.getField(city).value) {
	  case '': return '';
		break;
	  case 'BRONX': return '1';
		break;
	  case 'BROOKLYN': return '2';
		break;
	  case 'MANHATTAN': return '3';
		break;
	  case 'QUEENS': return '4';
		break;
	  case 'STATEN ISLAND': return '5';
		break;
	  default: return '';
	}
  }

  function VehicleInfo() {
	var veh_str = 
	// Vehicle Involvement
	setOption('#holderVehicle\\[0\\]\\.stolenCrime', this.getField('Vehicle Involvement').value) +
  
	//Plates Lost Stolen
	setOption('#holderVehicle\\[0\\]\\.plateLstSt', this.getField('Plates Lost Stolen').value) +
  
	// # of Plates
	setValue('#holderVehicle\\[0\\]\\.numPlates', this.getField('No of Plates').value) +
  
	// License Plate #
	setValue('#holderVehicle\\[0\\]\\.licenseNum', this.getField('License Plate No').value) +
  
	// State
	//document.querySelector("#holderVehicle\\[0\\]\\.state").options.selectedIndex = 'NY';
  
	// Expiration
	setValue('#holderVehicle\\[0\\]\\.expire', this.getField('Expiration').valueAsString) +
  
	// Vehicle Type
	setOption('#holderVehicle\\[0\\]\\.vehType', this.getField('Vehicle Type').value) +
  
	// VIN #
	setValue('#holderVehicle\\[0\\]\\.vinNum', this.getField('VIN No').value) +
  
	// Year
	setValue('#holderVehicle\\[0\\]\\.vehYear', this.getField('Year').value) +
  
	// Make
	//setOption('#holderVehicle\\[0\\]\\.vehMake', this.getField('Veh_Make_ComboBox').value) +
  
	// Model
	setValue('#holderVehicle\\[0\\]\\.vehModelOther', this.getField('Model').value) +
  
	// Style
	setOption('#holderVehicle\\[0\\]\\.vehStyle', this.getField('Veh_Style_ComboBox').value) +
  
	// Color
	setOption('#holderVehicle\\[0\\]\\.vehColor', this.getField('Veh_Color_ComboBox').value) +
  
	// Vehicle Value ($)
	setValue('#holderVehicle\\[0\\]\\.vehValue', this.getField('Vehicle Value').value) +
  
	// Insurance
	setValue('#holderVehicle\\[0\\]\\.insuranceCd', this.getField('Ins Code').value) +
  
	// Policy #
	setValue('#holderVehicle\\[0\\]\\.policyNum', this.getField('Policy No').valueAsString) +
  
	// Invoice #
	setValue('#holderVehicle\\[0\\]\\.voucher', this.getField('Invoice No').value) + 
  
	// Vehicle recovered prior to alarm transmittal
	setOption('#holderVehicle\\[0\\]\\.recovPriorXmit', this.getField('Prior to Alarm Transmittal').value) +
  
	// Alarm Transmitted
	setOption('#holderVehicle\\[0\\]\\.alarmXmitted', this.getField('Alarm Transmittal').value) +
  
	// Alarm #
	setValue('#holderVehicle\\[0\\]\\.alarmNum', this.getField('Alarm No').value) + 
  
	// Time
	setValue('#holderVehicle\\[0\\]\\.alarmTime', this.getField('Time_4').valueAsString) + 
  
	// Date
	setValue('#holderVehicle\\[0\\]\\.alarmDate', this.getField('Date_4').valueAsString) + 
  
	// Pct
	setValue('#holderVehicle\\[0\\]\\.alarmPct', this.getField('Alarm Precinct').valueAsString) + 
  
	// Transmitted by (Rank, Name)
	setValue('#holderVehicle\\[0\\]\\.alarmXmitBy', this.getField('Transmitted By Rank Name').value) + 
  
	// Vehicle Stolen/ Attempted Stolen From
	setOption('#holderVehicle\\[0\\]\\.vehLocation', this.getField('Vehicle Stolen From').value) +
  
	// If Other
	setValue('#holderVehicle\\[0\\]\\.vehLocOther', this.getField('Veh If Other').value) + 
  
	// Vehicle: Damaged Non-Motor Vehicle
	setCheckbox('#holderVehicle\\[0\\]\\.dmgNonmvAcc', this.getField('Damaged NonMotor Vehicle Accident').value) +
  
	// Vehicle: Damaged Vehicle Accident
	setCheckbox('#holderVehicle\\[0\\]\\.dmgVehAcc', this.getField('Damaged Vehicle Accident').value) +
	
	// Vehicle: Vehicle Parts/Accessories Removed
	setCheckbox('#holderVehicle\\[0\\]\\.vehPartsRem', this.getField('Vehicle PartsAccessories Removed').value) +
  
	// Vehicle: Property Removed from Vehicle
	setCheckbox('#holderVehicle\\[0\\]\\.vehPropRem', this.getField('Property Removed From Vehicle').value) +
  
	//Vehicle Held for Forfeiture
	setOption('#holderVehicle\\[0\\]\\.holdForfeit', this.getField('Veh Held For Forfeiture').value) 
  
	if( this.getField('Year').value === '') {
	  return '';
	} else {
	  return `setTimeout(() => { document.querySelector("#vehiHeader > a.link").click(); ${veh_str};}, 2000);`
	}
}

function DeftCallsMade() {
	var outStr = '';
	if((this.getField('DeftTotalCalls').value === '' || this.getField('DeftTotalCalls').value === 0) && this.getField('AreaCode1').value === '') {
		outStr += setCheckbox("#defendRefused", true);
	}
	else {
		// Phone Number #1
		outStr += setValue("#defendCall1\\.phoneNum", this.getField('AreaCode1').value.toString() + this.getField('Tele_3_1').value + this.getField('Tele_4_1').value);
		outStr += setValue("#defendCall1\\.namel", this.getField('Tele_LName_1').value);
		outStr += setValue("#defendCall1\\.namef", this.getField('Tele_FName_1').value);
		outStr += setValue("#defendCall1\\.cellPhoneName", this.getField('Tele_ListedName_1').value);
		outStr += setOption("#defendPhoneName1\\.posiRelat", this.getField('Tele_Relationship_1').value);
		outStr += setOption("#defendCall1\\.callCompleted", this.getField('Tele_CallCompleted1').value);
		
		// Phone Number #2
		outStr += setValue("#defendCall2\\.phoneNum", this.getField('AreaCode0').value.toString() + this.getField('Tele_3_0').value + this.getField('Tele_4_0').value);
		outStr += setValue("#defendCall2\\.namel", this.getField('Tele_LName_0').value);
		outStr += setValue("#defendCall2\\.namef", this.getField('Tele_FName_0').value);
		outStr += setValue("#defendCall2\\.cellPhoneName", this.getField('Tele_ListedName_0').value);
		outStr += setOption("#defendPhoneName2\\.posiRelat", this.getField('Tele_Relationship_0').value);
		outStr += setOption("#defendCall2\\.callCompleted", this.getField('Tele_CallCompleted2').value);
		
		// Phone Number #3
		outStr += setValue("#defendCall3\\.phoneNum", this.getField('AreaCode2').value.toString() + this.getField('Tele_3_2').value + this.getField('Tele_4_2').value);
		outStr += setValue("#defendCall3\\.namel", this.getField('Tele_LName_2').value);
		outStr += setValue("#defendCall3\\.namef", this.getField('Tele_FName_2').value);
		outStr += setValue("#defendCall3\\.cellPhoneName", this.getField('Tele_ListedName_2').value);
		outStr += setOption("#defendPhoneName3\\.posiRelat", this.getField('Tele_Relationship_2').value);
		outStr += setOption("#defendCall3\\.callCompleted", this.getField('Tele_CallCompleted3').value);
	}

	return outStr;
}

function JuvenileInfo() {
	var outStr = '';
	if(this.getField('JuvOffender').value === '' || this.getField('JuvOffender').value === 'Off' || this.getField('JuvOffender').value === 2) {

	}
	else {
	outStr += setCheckbox("#arrestInfo\\.juvOffInd", this.getField('JuvOffender').value);

	// Relative Notified Type
	outStr += setOption("#arrestInfo\\.juvRelType", this.getField('Juvi Relative Notified').value);

	// # of Priors
	outStr += setValue("#arrestInfo\\.juvNumPrior", this.getField('NumOfPriors').value);
	
	// Name
	outStr += setValue("#arrestInfo\\.juvRelNotify", this.getField('Relative Name').value);
	
	// School Attending
	outStr += setValue("#arrestInfo\\.juvSchool", this.getField('SchoolAttending').value);
	
	// Time Notified
	outStr += setValue("#juvenileDetails\\.juvenilePhone\\.callTime", this.getField('Relative Time Notified').value);
	
	// Mother's Maiden Name
	outStr += setValue("#arrestInfo\\.juvMoMaiden", this.getField('Mother Name').value);

	// Phone Number
	outStr += setValue("#juvenileDetails\\.juvenilePhone\\.phoneNum", this.getField('Relative Tele AreaC').value.toString() + this.getField('Relative Tele AreaC0').value);
	
	// Personal Recog
	outStr += setOption("#arrestInfo\\.rorCd", this.getField('JuvPersRecog').value);
	}

	return outStr;
}

function IMEIInfo() {  
	if(this.getField('DEFT_IMEI Number').value === '') {
		return `setTimeout(() => { document.querySelector("#id2 > tbody > tr > td:nth-child(3) > a").click();}, 2000);`
	} else {
		var imei_str = 
		// IMEI Number
		setValue('#holderDeviceInfo\\[0\\]\\.pedIdNum', this.getField('DEFT_IMEI Number').value) +
		
		// Confirm IMEI Number      
		setValue('#holderDeviceInfo\\[0\\]\\.conPedIdNum', this.getField('DEFT_IMEI Number').value) +
	  
		// Cell Phone #
		setValue('#holderDeviceInfo\\[0\\]\\.pedTelNum', this.getField('deft cell tel 0').value.toString() + 
						  this.getField('deft cell tel 1').value + this.getField('deft cell tel 2').value) +	
		// Carrier, 5: Other
		setOption('#holderDeviceInfo\\[0\\]\\.acctCarrier', 5) +
	  
		// Other
		setValue('#holderDeviceInfo\\[0\\]\\.acctCarrierOthr', this.getField('DEFT_Carrier').value) +
	  
		// Make
		setValue('#holderDeviceInfo\\[0\\]\\.pedMake', this.getField('Make_3').value) +
		
		// Model
		setValue('#holderDeviceInfo\\[0\\]\\.pedModel', this.getField('Model_2').value) +
		
		// Insured
		setOption('#holderDeviceInfo\\[0\\]\\.pedInsured', this.getField('Insured').value);
	  	return imei_str;
	}
  }

function DeftPhoneNumbersEmail() {
	var outputStr = '';
	// Home Phone #
	if(this.getField("deft home tel 0").value === '') 
		outputStr += setOption("#defendDetails\\.homePhone\\.unknown", 1);
	else
		outputStr += setValue("#defendDetails\\.homePhone\\.phoneNum", this.getField('deft home tel 0').value.toString() + 
					 this.getField('deft home tel 1').value + this.getField('deft home tel 2').value);
	// Business Phone #
	outputStr += setOption("#defendDetails\\.bizPhone\\.unknown", 1);
	
	// Cell Phone #
	if(this.getField("deft cell tel 0").value === '') 
		outputStr += setOption("#defendDetails\\.cellPhone\\.unknown", 1);
	else
		outputStr += setValue("#defendDetails\\.cellPhone\\.phoneNum", this.getField('deft cell tel 0').value.toString() + 
					 this.getField('deft cell tel 1').value + this.getField('deft cell tel 2').value);
	// Email
	if(this.getField("DEFT Email").value === '') 
		outputStr += setOption("#defendDetails\\.emailAddr\\.unknown", 1);
	else
		outputStr += setValue("#defendDetails\\.emailAddr\\.name", this.getField("DEFT Email").value);

	return outputStr;
}

function MoInfo() {
	var outStr = '';
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[0\\]\\.ucatItem", this.getField("DEFT MO AskedQ").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[1\\]\\.ucatItem", this.getField("DEFT MO BagO").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[2\\]\\.ucatItem", this.getField("DEFT MO BicycleU").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[3\\]\\.ucatItem", this.getField("DEFT MO CarJ").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[4\\]\\.ucatItem", this.getField("DEFT MO ConG").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[5\\]\\.ucatItem", this.getField("DEFT MO DeceptU").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[6\\]\\.ucatItem", this.getField("DEFT MO EntryTW").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[7\\]\\.ucatItem", this.getField("DEFT MO FollowedV").value);

	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[9\\]\\.ucatItem", this.getField("DEFT MO FollowedVB").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[25\\]\\.ucatItem", this.getField("DEFT MO FoodD").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[10\\]\\.ucatItem", this.getField("DEFT MO Hij").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[11\\]\\.ucatItem", this.getField("DEFT MO JewelSnatch").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[12\\]\\.ucatItem", this.getField("DEFT MO JumpedFV").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[13\\]\\.ucatItem", this.getField("DEFT MO MotorC").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[14\\]\\.ucatItem", this.getField("DEFT MO NoteP").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[15\\]\\.ucatItem", this.getField("DEFT MO OpenedS").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[16\\]\\.ucatItem", this.getField("DEFT MO Payroll").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[18\\]\\.ucatItem", this.getField("DEFT MO PerpMadeSt").value);

	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[19\\]\\.ucatItem", this.getField("DEFT MO OfferedS").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[20\\]\\.ucatItem", this.getField("DEFT MO PickP").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[21\\]\\.ucatItem", this.getField("DEFT MO PropSn").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[22\\]\\.ucatItem", this.getField("DEFT MO PushIn").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[23\\]\\.ucatItem", this.getField("DEFT MO PurseW").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[24\\]\\.ucatItem", this.getField("DEFT MO TookV").value);
	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[17\\]\\.ucatItem", this.getField("DEFT MO Other").value);
	if(this.getField("DEFT MO Other").value === 1)
		outStr += setValue("#defendDetails\\.modusOperandi\\[17\\]\\.itemOther", this.getField("DEFT MO OTHER").value + ' ' + this.getField("DEFT MO OTHER2").value);

	outStr += setCheckbox("#defendDetails\\.modusOperandi\\[8\\]\\.ucatItem", this.getField("DEFT MO TRANSIT").value);

	// Action Toward Victim
	outStr += setCheckbox("#defendDetails\\.actionToVictim\\[0\\]\\.ucatItem", this.getField("DEFT ACTION TOWARD VIC").value);
	outStr += setCheckbox("#defendDetails\\.actionToVictim\\[1\\]\\.ucatItem", this.getField("DEFT ACTION TOWARD INJ PI").value);
	outStr += setCheckbox("#defendDetails\\.actionToVictim\\[2\\]\\.ucatItem", this.getField("DEFT ACTION TOWARD MADE STRP").value);
	outStr += setCheckbox("#defendDetails\\.actionToVictim\\[3\\]\\.ucatItem", this.getField("DEFT ACTION TOWARD PEPPER SPR").value);
	outStr += setCheckbox("#defendDetails\\.actionToVictim\\[4\\]\\.ucatItem", this.getField("DEFT ACTION TOWARD SLASH").value);
	outStr += setCheckbox("#defendDetails\\.actionToVictim\\[4\\]\\.ucatItem", this.getField("DEFT ACTION TOWARD STAB").value);
	outStr += setCheckbox("#defendDetails\\.actionToVictim\\[5\\]\\.ucatItem", this.getField("DEFT ACTION TOWARD STRK W OBJ").value);

	outStr += setCheckbox("#defendDetails\\.actionToVictim\\[6\\]\.ucatItem", this.getField("DEFT ACTION TOWARD TIED HC").value);
	outStr += setCheckbox("#defendDetails\\.actionToVictim\\[7\\]\\.ucatItem", this.getField("DEFT ACTION TOWARD TORTURE").value);
	outStr += setCheckbox("#defendDetails\\.actionToVictim\\[8\\]\\.ucatItem", this.getField("DEFT ACTION TOWARD USD THR FLAME").value);
	outStr += setCheckbox("#defendDetails\\.actionToVictim\\[9\\]\\.ucatItem", this.getField("DEFT ACTION TOWARD UNK NON").value);
	outStr += setCheckbox("#defendDetails\\.actionToVictim\\[10\\]\\.ucatItem", this.getField("DEFT ACTION TOWARD OTHER").value);
	if(this.getField("DEFT ACTION TOWARD OTHER").value === 1)
		outStr += setValue("#defendDetails\\.actionToVictim\\[10\\]\\.itemOther", this.getField("DEFT ACTION TOWARD VIC OTHER1").value + ' ' + 
				    this.getField("DEFT ACTION TOWARD VIC OTHER2").value  + ' ' + this.getField("DEFT ACTION TOWARD VIC OTHER3").value + ' ' + 
					this.getField("DEFT ACTION TOWARD VIC OTHER4").value);	
	return outStr;
}

function VouchersInfo() {
	//var outStr = '';
	if(this.getField('ArrInvoiceNum').value === '') { // if Vouchers field is empty, remove Voucher Section
	  return `setTimeout(() => { document.querySelector("#id1 > tbody > tr > td:nth-child(3) > a").click(); }, 1000);`
	} // Otherwise fill in the voucher info     // TODO
}

function MaleOrFemale() {
	if(this.getField("Check Box49").value === 'Off' && this.getField("Check Box50").value === 'Off') return ''
	
	if(this.getField("Check Box49").value === 'true') 
		return `document.getElementsByName('defendDetails.pdatPedig.sex')[0].checked=true;` 
	else
		return `document.getElementsByName('defendDetails.pdatPedig.sex')[1].checked=true;`
}

function Race() {
	if(this.getField("Race_White").value === 'Off' && this.getField("Race_Am.Ind").value === 'Off' &&
	   this.getField("Race_His.W").value === 'Off' && this.getField("Race_Black").value === 'Off' &&
	   this.getField("Race_Asian").value === 'Off' && this.getField("Race_His.B").value === 'Off')
		return `document.getElementsByName('defendDetails.pdatPedig.race')[4].checked=true;`

	if(this.getField("Race_Am.Ind").value === 'true')  
		return `document.getElementsByName('defendDetails.pdatPedig.race')[0].checked=true;` 
	if(this.getField("Race_Asian").value === 'true')  
		return `document.getElementsByName('defendDetails.pdatPedig.race')[1].checked=true;`
	if(this.getField("Race_Black").value === 'true')  
		return `document.getElementsByName('defendDetails.pdatPedig.race')[2].checked=true;`
	if(this.getField("Race_His.B").value === 'true')  
		return `document.getElementsByName('defendDetails.pdatPedig.race')[3].checked=true;`
	if(this.getField("Race_White").value === 'true')  
		return `document.getElementsByName('defendDetails.pdatPedig.race')[5].checked=true;`
	if(this.getField("Race_His.W").value === 'true')  
		return `document.getElementsByName('defendDetails.pdatPedig.race')[6].checked=true;`			 
}

function DeftDescript() {
	var outStr = '';
	// Head Gear
	outStr += setOption("#defendDetails\\.clothingDescription\\[0\\]\\.ucatItemType", this.getField("DEFT HEAD GEAR").value);
	if(this.getField("DEFT HEAD GEAR").value === 6) // 6: Other
		outStr += setValue("#defendDetails\\.clothingDescription\\[0\\]\\.itemOther", this.getField("DEFT HEADGEAR OTHER").value + ' ' + 
				                 this.getField("DEFT HEADGEAR OTHER0").value  + ' ' + this.getField("DEFT HEADGEAR OTHER1").value);
	
	if(this.getField("DEFT HEAD GEAR").value !== 12) { // 12: UNK
		outStr += setOption("#defendDetails\\.clothingDescription\\[0\\]\\.itemColor", this.getField("DEFT HEADGEAR COLOR").value);
		outStr += enableTextField('#defendDetails\\.clothingDescription\\[0\\]\\.itemColor');
	}

	// Foot Gear
	outStr += setOption("#defendDetails\\.clothingDescription\\[1\\]\\.ucatItemType", this.getField("DEFT FOOT WEAR").value);
	if(this.getField("DEFT FOOT WEAR").value === 6) // 6: Other
		outStr += setValue("#defendDetails\\.clothingDescription\\[1\\]\\.itemOther", this.getField("DEFT FOOTWEAR OTHER").value + ' ' + 
				                 this.getField("DEFT FOOTWEAR OTHER0").value  + ' ' + this.getField("DEFT FOOTWEAR OTHER1").value);
	
	if(this.getField("DEFT FOOT WEAR").value !== 10) { // 10: UNK
		outStr += setOption("#defendDetails\\.clothingDescription\\[1\\]\\.itemColor", this.getField("DEFT FOOTWEAR COLOR").value);
		outStr += enableTextField('#defendDetails\\.clothingDescription\\[1\\]\\.itemColor');
	}
	
	// Outer Wear
	outStr += setOption("#defendDetails\\.clothingDescription\\[2\\]\\.ucatItemType", this.getField("DEFT OUTER WEAR").value);
	if(this.getField("DEFT OUTER WEAR").value === 4) // 4: Other
		outStr += setValue("#defendDetails\\.clothingDescription\\[2\\]\\.itemOther", this.getField("DEFT OUTERWEAR OTHER").value + ' ' + 
				                 this.getField("DEFT OUTERWEAR OTHER0").value  + ' ' + this.getField("DEFT OUTERWEAR OTHER1").value);
	
	if(this.getField("DEFT OUTER WEAR").value !== 11) { // 11: UNK
		outStr += setOption("#defendDetails\\.clothingDescription\\[2\\]\\.itemColor", this.getField("DEFT OUTERWEAR COLOR").value);
		outStr += enableTextField('#defendDetails\\.clothingDescription\\[2\\]\\.itemColor');
	}
	
	// Special Characteristics
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[0\\]\\.ucatItem", this.getField("DEFT SPEC CHAR0").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[1\\]\\.ucatItem", this.getField("DEFT SPEC CHAR1").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[2\\]\\.ucatItem", this.getField("DEFT SPEC CHAR2").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[3\\]\\.ucatItem", this.getField("DEFT SPEC CHAR3").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[4\\]\\.ucatItem", this.getField("DEFT SPEC CHAR4").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[5\\]\\.ucatItem", this.getField("DEFT SPEC CHAR5").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[6\\]\\.ucatItem", this.getField("DEFT SPEC CHAR6").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[7\\]\\.ucatItem", this.getField("DEFT SPEC CHAR7").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[8\\]\\.ucatItem", this.getField("DEFT SPEC CHAR8").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[9\\]\\.ucatItem", this.getField("DEFT SPEC CHAR9").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[10\\]\\.ucatItem", this.getField("DEFT SPEC CHAR10").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[11\\]\\.ucatItem", this.getField("DEFT SPEC CHAR11").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[12\\]\\.ucatItem", this.getField("DEFT SPEC CHAR12").value);
	if(this.getField("DEFT SPEC CHAR12").value === 1)
		outStr += setValue("#defendDetails\\.specialCharacteristics\\[12\\]\\.itemOther", this.getField("DEFT SPEC CHAR OTHER").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[13\\]\\.ucatItem", this.getField("DEFT SPEC CHAR13").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[14\\]\\.ucatItem", this.getField("DEFT SPEC CHAR14").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[15\\]\\.ucatItem", this.getField("DEFT SPEC CHAR15").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[16\\]\\.ucatItem", this.getField("DEFT SPEC CHAR16").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[17\\]\\.ucatItem", this.getField("DEFT SPEC CHAR17").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[18\\]\\.ucatItem", this.getField("DEFT SPEC CHAR18").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[19\\]\\.ucatItem", this.getField("DEFT SPEC CHAR19").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[20\\]\\.ucatItem", this.getField("DEFT SPEC CHAR20").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[21\\]\\.ucatItem", this.getField("DEFT SPEC CHAR21").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[22\\]\\.ucatItem", this.getField("DEFT SPEC CHAR22").value);
	outStr += setCheckbox("#defendDetails\\.specialCharacteristics\\[23\\]\\.ucatItem", this.getField("DEFT SPEC CHAR23").value);

	// Hairstyle
	outStr += setOption("#defendDetails\\.pdatPedig\\.hairType", this.getField("DEFT HAIRSTYLE").value);
	if(this.getField("DEFT HAIRSTYLE").value === 11) // 11: Other
		outStr += setValue("#defendDetails\\.pdatPedig\\.hairTypeOther", this.getField("DEFT HAIRSTYLE OTHER").value);
		
	// Skin Tone
	outStr += setOption("#defendDetails\\.pdatPedig\\.skinTone", this.getField("DEFT SKINTONE").value);
	
	// Complexion, BROWN is missing in OMNI
	outStr += setOption("#defendDetails\\.pdatPedig\\.skinCmplx", this.getField("DEFT SKIN COMPLEXION").value);
	if(this.getField("DEFT SKIN COMPLEXION").value === 6) // 6: Other
		outStr += setValue("#defendDetails\\.pdatPedig\\.skinCmplxOther", this.getField("DEFT COMPLEX OTHER").value);
	
	// Other Clothing/Accessories
	outStr += setOption("#defendDetails\\.clothingDescription\\[3\\]\\.ucatItemType", this.getField("DEFT OTHERF CLOTHING").value);
	if(this.getField("DEFT OTHERF CLOTHING").value === 7) // 7: Other
		outStr += setValue("#defendDetails\\.clothingDescription\\[3\\]\\.itemOther", this.getField("DEFT CLOTHING OTHER").value);
	
	if(this.getField("DEFT OTHERF CLOTHING").value !== 15) { // 15: UNK
		outStr += setOption("#defendDetails\\.clothingDescription\\[3\\]\\.itemColor", this.getField("DEFT CLOTHING COLOR").value);
		outStr += enableTextField('#defendDetails\\.clothingDescription\\[3\\]\\.itemColor');
	}
	
	// Distinguishing Body Marks
	outStr += setOption("#defendDetails\\.bodyMark\\[0\\]\\.ucatItem", this.getField("DEFT DISTING BODY MARKS").value);
	return outStr;
}

this.getField("output2").value = 
/////////////////////
// Arresting Officer
///////////////////

//Department
setOption('#arrestingOfficerInfo\\.aoDept', this.getField('Jurisdiction Of Complaint').value) + 

// Tax
setValue('#arrestingOfficerInfo\\.aoTaxnumSs', this.getField("Tax Registry No").value) +
// On Duty
setOption('#arrestingOfficerInfo\\.aoOnduty', this.getField("OnDutyAO").value) +
// In Uniform
setOption('#arrestingOfficerInfo\\.aoInUnif', this.getField("InUnifAO").value) +
// Squad
setValue('#arrestingOfficerInfo\\.aoSquad', this.getField("Squad").value) +
// Chart
setOption('#arrestingOfficerInfo\\.aoChart', getChart('Squad')) +
// Primary Assignment
setOption('#arrestingOfficerInfo\\.aoAssigned', this.getField("PrimAssignAO").value) +
// Force Used
setOption('#arrestingOfficerInfo\\.forceUsed', this.getField("ForceUsedAO").value) +
// AO Injured
setOption('#arrestingOfficerInfo\\.aoInjured', this.getField("AO_Inj").value) +
// AO BWC
setOption('#arrestingOfficerInfo\\.aoBodyCam', this.getField("BWC_olbs").value) +

/////////////////////
// Assisting Officer
///////////////////

//Department
setOption('#assistingOfficerInfo\\.aoDept', this.getField('Jurisdiction Of Complaint').value) + 
// Tax
setValue('#assistingOfficerInfo\\.aoTaxnumSs', this.getField("Tax Registry No_2").value) +
// On Duty
setOption('#assistingOfficerInfo\\.aoOnduty', this.getField("OnDuty_AssistOff").value) +
// In Uniform
setOption('#assistingOfficerInfo\\.aoInUnif', this.getField("InUniform_AssistOff").value) +
// Squad
setValue('#assistingOfficerInfo\\.aoSquad', this.getField("Text2").value) +
// Chart
setOption('#assistingOfficerInfo\\.aoChart', getChart("Text2")) +
// Primary Assignment
setOption('#assistingOfficerInfo\\.aoAssigned', this.getField("PrimAssignment_AssistOff").value) +
// Force Used
setOption('#assistingOfficerInfo\\.forceUsed', this.getField("ForceUsed_AssistOff1").value) +
// AssistOff Injured
setOption('#assistingOfficerInfo\\.aoInjured', this.getField("Inj_AssistOff").value) +
// AssistOff BWC
setOption('#assistingOfficerInfo\\.aoBodyCam', this.getField("BWC_assistOff").value) +

// Arrest time
setValue('#arrestInfo\\.strArrTime', this.getField('Arrest Time').valueAsString) +

// Arrest Date
setValue('#arrestInfo\\.strArrDate', this.getField("M").valueAsString + '/' + this.getField("D").valueAsString + '/' + this.getField("Y").valueAsString) +

// Arrest Processing Type, 3: DAT, 5: Online
setOption("#arrestInfo\\.arrProcType", this.getField("DAT_Offense").value) +

// Special Event Code, 2: None
setOption("#arrestInfo\\.crimEventType", 2) +

// ICAD #
setValue('#arrestInfo\\.icadNum', this.getField("ICAD No").value) +

// Current Location of Perpetrator
setOption("#arrestInfo\\.perpBoroughLoc", this.getField("LocationOfPrisoner").value) +
setOption("#arrestInfo\\.perpLocType", this.getField("LocationOfPrisonerType0").value) +
// setOption("#arrestInfo\\.perpLocation", 20); // 20: 084 Precinct, Actual OMNI

// Location of Occurrence / location of Arrest
`document.querySelector("#arrInf > div:nth-child(14) > div:nth-child(1) > label").append("   -   [ARREST LOCATION]");` +
`document.querySelector("#arrInf > div:nth-child(14) > div:nth-child(1) > label").style.color = "orange";` +

setOption("#addrArrstAddress\\.location", this.getField("Check Box5345").value) +

// Address #
setValue("#addrArrstAddress\\.addressNum", this.getField("Text56123_1").value) +

// Street Name
setValue("#addrArrstAddress\\.streetName", this.getField("Text56123_2").value) +

// County
setOption("#addrArrstAddress\\.city", getCounty("-90-")) +

// Zip
setValue("#addrArrstAddress\\.zip", this.getField("Text58 arrest location").value) +

// Apt# / Room#
setValue("#addrArrstAddress\\.aptNum", this.getField("Text57_Apt").value) +

// Cross Street
setValue("#addrArrstAddress\\.streetCross1", this.getField("Text597465").value) +
setValue("#addrArrstAddress\\.streetCross2", this.getField("Text608567").value) +

// Intersection
setValue("#addrArrstAddress\\.streetInter1", this.getField("224234").value) +
setValue("#addrArrstAddress\\.streetInter2", this.getField("6786").value) +
setOption("#addrArrstAddress\\.corner", this.getField("Check Box66arrest").value) +

// Strip Search Conducted
setOption("#arrestInfo\\.stripSearch", this.getField('StrSearchAO0').value) +

// Viper Initiated Arrest
setOption("#arrestInfo\\.viperInitiated", this.getField('VipIniArr').value) +

// SQF
setOption("#arrestInfo\\.sqfFlag", this.getField('ArrStopReport').value) +

//DAT Declined Reason(s)
setCheckbox("#arrestInfo\\.datDclKnownCrimAbsconder", this.getField('DAT Declined').value) +
setCheckbox("#arrestInfo\\.datDclOpenWarrant", this.getField('DAT Declined0').value) +
setCheckbox("#arrestInfo\\.datDclCourtProceedings", this.getField('DAT Declined1').value) +
setCheckbox("#arrestInfo\\.datDclCannotIdentify", this.getField('DAT Declined2').value) +
setCheckbox("#arrestInfo\\.datDclFamilyOffense", this.getField('DAT Declined3').value) +
setCheckbox("#arrestInfo\\.datDclThreatOfficial", this.getField('DAT Declined4').value) +
setCheckbox("#arrestInfo\\.datDclSuspendDl", this.getField('DAT Declined5').value) +
setCheckbox("#arrestInfo\\.datDclOffenseOfficial", this.getField('DAT Declined6').value) +
setCheckbox("#arrestInfo\\.datDclOrderOfProt", this.getField('DAT Declined7').value) +
setCheckbox("#arrestInfo\\.datDclHateCrime", this.getField('DAT Declined8').value) +
setCheckbox("#arrestInfo\\.datDclSexCrime", this.getField('DAT Declined9').value) +
setCheckbox("#arrestInfo\\.datDclNeedMedcare", this.getField('DAT Declined10').value) +

// Voucher Invoices
VouchersInfo() +

/////////////////////
// Defendant
///////////////////

// Name
setValue("#defendDetails\\.nmatName\\.namel", this.getField("DEFT LAST").value) +
setValue("#defendDetails\\.nmatName\\.namef", this.getField("DEFT FIRST").value) +
setValue("#defendDetails\\.nmatName\\.namem", this.getField("DEFT MI").value) +

// Date of Birth
setValue("#defendDetails\\.nmatName\\.dob", this.getField("Text5").valueAsString) +

// Occupation
setOption("#defendDetails\\.pdatPedig\\.occupation", this.getField("Occupation").value === '' ? 31 : '') +

// Physical Condition
setOption("#defendDetails\\.pdatPedig\\.physCond", this.getField("PhyCondition2").value) +

// Type of Drug Used?
setOption("#defendDetails\\.pdatPedig\\.drugUsed", this.getField("TypeOfDrugUsed").value) +

// Defendant Calls Made
DeftCallsMade() +

// Defendant ID Type
setOption("#arrestInfo\\.identificationId", this.getField("ID_Type_ComboBox").value) +
setValue("#arrestInfo\\.identificationNum", this.getField("Text40").value) +

// Defendant Licenses
// License/Permit Type
setOption("#defendLicense\\.licType", this.getField("LicPermitType").value) +

// License Number
setValue("#defendLicense\\.licNo", this.getField("LicPermitNum").value) +

// Juvenile
JuvenileInfo() +

// Vehicle ///////////////////////////////////////////////
VehicleInfo() +

// Deft IMEI
IMEIInfo() +

// Deft Recording Police Activity
setOption("#arrestInfo\\.recordPoliceActivity", 1) + 

// Narrative
setValueEscapeChar("#narratDetails\\.details", this.getField("61 narrative_1").value) +

//Approving Supervisor
setOption("#arrestInfo\\.supvAgencyStr", 1) +
setValue("#arrestInfo\\.supvTaxnum", this.getField("Text82").value) +

/////////////////////
// Perpetrator
///////////////////

// Name
setValue("#defLastName", this.getField("DEFT LAST").value) +
setValue("#defFirstName", this.getField("DEFT FIRST").value) +
setValue("#defMdlName", this.getField("DEFT MI").value) +

// Order of Protection
setOption("#defendDetails\\.pdatPedig\\.opInEffect", this.getField("OrderOfProt").value) +

// Issuing Court
enableTextField('#defendDetails\\.pdatPedig\\.opIssuingCt') +

// Docket #
setValue("#defendDetails\\.pdatPedig\\.opDocketNum", this.getField("DocketNum").valueAsString) +

// Exp. Date Of Order Of Protection
setValue("#defendDetails\\.pdatPedig\\.opExpDate", this.getField("ExpOOP").valueAsString) +

// Veteran
setCheckbox('#defendDetails\\.nmatName\\.veteran', this.getField('Veteran').value) +

// Nickname
setValue("#defendDetails\\.nmatName\\.akaAlias", this.getField("DEFT NICKNAME").value) +

// Sex
MaleOrFemale() +

// Height and Weight
setValue("#defendDetails\\.pdatPedig\\.heightFeet", this.getField("Text41").valueAsString) +
setValue("#defendDetails\\.pdatPedig\\.heightInches", this.getField("Text42").valueAsString) +
setValue("#defendDetails\\.pdatPedig\\.weight", this.getField("Text43").value) +

// Race
Race() +

// Eye Color
setOption("#defendDetails\\.pdatPedig\\.eyeColor", this.getField("DEFT EYECOLOR").value) +

// Hair Color
setOption("#defendDetails\\.pdatPedig\\.hairColor", this.getField("DEFT HAIRCOLOR").value) +

// Hair Length
setOption("#defendDetails\\.pdatPedig\\.hairLength", this.getField("DEFT HAIRLENGTH").value) +

// US Citizen
setOption("#defendDetails\\.pdatPedig\\.citizen", this.getField("DEFT US CITIZEN").value) +

// State/Country of Birth
setOption("#defendDetails\\.pdatPedig\\.placeBirth", this.getField("DEFT STATE COUNTRY").value === 'USA' ? 353 : '') +

// Permanent Residence Address
// Address Location
setOption("#defendDetails\\.addrResAddress\\.resCode", this.getField("DEFT ADDRESS STATUS").value) + 

// Building #
setValue("#defendDetails\\.addrResAddress\\.addressNum", this.getField("Defts Home Address Number").value) +

// Address
setValue("#defendDetails\\.addrResAddress\\.streetName", this.getField("Defts Home Address Street").value) +

// City
setValue("#defendDetails\\.addrResAddress\\.city", this.getField("City").value) +

// State, 236: NY
setOption("#defendDetails\\.addrResAddress\\.state", this.getField("StateCountry").value === 'NY' ? 236 : '') +

// Zip
setValue("#defendDetails\\.addrResAddress\\.zip", this.getField("Zip").value) +

// Zip
setValue("#defendDetails\\.addrResAddress\\.zip", this.getField("Zip").value) +

// Apt
setValue("#defendDetails\\.addrResAddress\\.aptNum", this.getField("Apt").value) +

DeftPhoneNumbersEmail() + 

// Is this person not Proficient in English?
setOption("#defendDetails\\.nmatName\\.interpNeeded", this.getField("DEFT PROF ENG").value) +

// Accent
setOption("#defendDetails\\.pdatPedig\\.accent", this.getField("DEFT ACCENT").value) +

// Victim & Suspect Live Together
setOption("#defendDetails\\.nmatName\\.cohabit", this.getField("DEFT VICTIM PERP LIVE").value) +

// Can Identify Suspect
setOption("#defendDetails\\.nmatName\\.identify", this.getField("DEFT CAN ID PERP").value) +

// Victim states Suspect is
setOption("#defendDetails\\.nmatName\\.posiRelat", this.getField("DEFT VICT STATES").value) +

// Social Security Number
setValue("#defendDetails\\.nmatName\\.ssNum", this.getField("ssn").value) +

// NYCHA Resident
setOption("#defendDetails\\.nmatName\\.haResident", this.getField("DEFT NYCHA RESID").value) +

// NYCHA Employee
setOption("#defendDetails\\.pdatPedig\\.haEmp", this.getField("DEFT NYCHA EMP").value) +

// N.Y.C. Transit Employee
setOption("#defendDetails\\.pdatPedig\\.taEmp", this.getField("DEFT NYC TRANSIT EMP").value) +
setOption("#defendDetails\\.pdatPedig\\.onOffDuty", 2) +

// TODO: Drug Types

// Weapon
// Weapon/Force
setOption("#defendDetails\\.holderWeapon\\[0\\]\\.wpnForce", this.getField("DEFT PHY FORCE WEAP").value) +

//Firearm Recovered
setOption("#defendDetails\\.holderWeapon\\[0\\]\\.recovered", this.getField("DEFT FIREARM REC").value) +

//Discharged
setOption("#defendDetails\\.holderWeapon\\[0\\]\\.firearmDisch", this.getField("DEFT FIREARM DISCH").value) +

// Suspected Gang Member
setOption("#defendDetails\\.nmatName\\.gangAffiliate", this.getField("DEFT GANG AFFI").value) +

// Used Transit System  
setOption("#defendDetails\\.perpUsedTA", this.getField("DEFT USED SUBW").value) +

// Statement made by Perpetrator
setValueEscapeChar("#defendDetails\\.unusualMoStatement\\.itemOther", this.getField("DEFT MADE STATEMENT").value) +

// Method of Flight
setValueEscapeChar("#defendDetails\\.unusualMoMethodOfFl\\.itemOther", this.getField("DEFT METHOD OF FLIGHT").value) +

// M.O.
MoInfo() +

// Deft Description, outfit
DeftDescript() +

// Impersonation of
setOption("#defendDetails\\.unusualMoImpersonation\\.ucatItem", this.getField("DEFT IMPRES OF").value) +
setValue("#defendDetails\\.unusualMoImpersonation\\.itemOther", this.getField("DEFT IMPERS OF OTHER").value) 

;




