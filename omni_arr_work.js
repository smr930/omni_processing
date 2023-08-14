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

function getChart(squad) {
	const squadLetter = this.getField(squad).value;
	const letter = squadLetter.charAt(0);
	switch (letter) {
  case '':
    return '';
    break;
  case 'A':
	return '5';
    break;
  case 'B':
	return '44';
    break;
  case 'C':
	return '43';
    break;
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
	setValue('#holderVehicle\\[0\\]\\.expire', this.getField('Expiration').value) +
  
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
	setValue('#holderVehicle\\[0\\]\\.policyNum', this.getField('Policy No').value) +
  
	// Invoice #
	setValue('#holderVehicle\\[0\\]\\.voucher', this.getField('Invoice No').value) + 
  
	// Vehicle recovered prior to alarm transmittal
	setOption('#holderVehicle\\[0\\]\\.recovPriorXmit', this.getField('Prior to Alarm Transmittal').value) +
  
	// Alarm Transmitted
	setOption('#holderVehicle\\[0\\]\\.alarmXmitted', this.getField('Alarm Transmittal').value) +
  
	// Alarm #
	setValue('#holderVehicle\\[0\\]\\.alarmNum', this.getField('Alarm No').value) + 
  
	// Time
	setValue('#holderVehicle\\[0\\]\\.alarmTime', this.getField('Time_4').value) + 
  
	// Date
	setValue('#holderVehicle\\[0\\]\\.alarmDate', this.getField('Date_4').value) + 
  
	// Pct
	setValue('#holderVehicle\\[0\\]\\.alarmPct', this.getField('Alarm Precinct').value) + 
  
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

function setIMEI(selector, value) {
	if(value === '') return '';
	const temp = selector.split(".");
	var first = '#' + temp[0].slice(0, 16) + '\\\\' + temp[0].slice(16);
	first = first.slice(0, 21) + '\\\\' + first.slice(21);
	first = first.slice(0, 24) + '\\\\' + first.slice(24) + '.';
	const outStr = first + temp[1];
	return `document.querySelector("${outStr}").value=` + `${value};`;
}

var DeftNumOfCalls = false;
if(this.getField('DeftTotalCalls').value === '' || this.getField('DeftTotalCalls').value === 0)
	DeftNumOfCalls = true;
else
	DeftNumOfCalls = false;

function DeftPhoneNumbersEmail() {
	var outputStr = '';
	// Home Phone #
	const deftHomeNum = this.getField("Text38").value;
	if(deftHomeNum === '') 
		outputStr += setOption2("defendDetails.homePhone.unknown", 1);
	else
		outputStr += setValue2("defendDetails.homePhone.phoneNum", this.getField("Text38").value);
	
	// Business Phone #
	outputStr += setOption2("defendDetails.bizPhone.unknown", 1);
	
	// Cell Phone #
	const deftCellNum = this.getField("Text1").value;
	if(deftCellNum === '') 
		outputStr += setOption2("defendDetails.cellPhone.unknown", 1);
	else
		outputStr += setValue2("defendDetails.cellPhone.phoneNum", this.getField("Text1").value);
	
	// Email
	const deftEmail = this.getField("DEFT Email").value;
	if(deftHomeNum === '') 
		outputStr += setOption2("defendDetails.emailAddr.unknown", 1);
	else
		outputStr += setValue2("defendDetails.emailAddr.name", this.getField("DEFT Email").value);

	if(outputStr === '')
		return;
	else
		return outputStr;
}

function VouchersInfo() {
	//var outStr = '';
	if(this.getField('ArrInvoiceNum').value === '') { // if Vouchers field is empty, remove Voucher Section
	  return `setTimeout(() => { document.querySelector("#id1 > tbody > tr > td:nth-child(3) > a").click(); }, 1000);`
	}
	// Otherwise fill in the voucher info
	// TODO
}

function MaleOrFemale() {
	if(this.getField("Check Box49").value === 'Off' && this.getField("Check Box50").value === 'Off')
		return ''
	
	if(this.getField("Check Box49").value === 'true') { 
		return `document.getElementsByName('defendDetails.pdatPedig.sex')[0].checked=true;` 
	}
	else {
		return `document.getElementsByName('defendDetails.pdatPedig.sex')[1].checked=true;`
	} 
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
setOption('#assistingOfficerInfo\\.aoChart', getChart("Text15")) +
// Primary Assignment
setOption('#assistingOfficerInfo\\.aoAssigned', this.getField("PrimAssignment_AssistOff").value) +
// Force Used
setOption('#assistingOfficerInfo\\.forceUsed', this.getField("ForceUsed_AssistOff1").value) +
// AssistOff Injured
setOption('#assistingOfficerInfo\\.aoInjured', this.getField("Inj_AssistOff").value) +
// AssistOff BWC
setOption('#assistingOfficerInfo\\.aoBodyCam', this.getField("BWC_assistOff").value) +

// Arrest time
setValue('#arrestInfo\\.strArrTime', this.getField("Arrest Time").value.toString().length < 4 ? this.getField('Arrest Time').value.toString().padStart(4, '0'): this.getField('Arrest Time').value) +

// Arrest Date
setValue('#arrestInfo\\.strArrDate', this.getField("M").value + '/' + this.getField("D").value + '/' + this.getField("Y").value) +

// Arrest Processing Type, 3: DAT, 5: Online
setOption("#arrestInfo\\.arrProcType", this.getField("DAT_Offense").value) +

// Special Event Code
setOption("#arrestInfo\\.crimEventType", 2) +

// ICAD #
setValue('#arrestInfo\\.icadNum', this.getField("ICAD No").value) +

// Current Location of Perpetrator
setOption("#arrestInfo\\.perpBoroughLoc", this.getField("LocationOfPrisoner").value) +
setOption("#arrestInfo\\.perpLocType", this.getField("LocationOfPrisonerType0").value) +

// Location of Occurrence / location of Arrest
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
setValue("#defendDetails\\.nmatName\\.dob", this.getField("Text5").value) +

// Occupation

// Physical Condition
setOption("#defendDetails\\.pdatPedig\\.physCond", this.getField("PhyCondition2").value) +

// Type of Drug Used?
setOption("#defendDetails\\.pdatPedig\\.drugUsed", this.getField("TypeOfDrugUsed").value) +

//Defendant Calls Made
//`document.querySelector("#defendRefused").checked=` + DeftNumOfCalls; +

// Defendant ID Type
setOption("#arrestInfo\\.identificationId", this.getField("ID_Type_ComboBox").value) +
setValue("#arrestInfo\\.identificationNum", this.getField("Text40").value) +

// Vehicle ///////////////////////////////////////////////
VehicleInfo() +

// Phone
// IMEI Number
//setIMEI("##holderDeviceInfo\\[0\\]\\.pedIdNum", this.getField('DEFT_IMEI Number').value) +
//setIMEI("##holderDeviceInfo\\[0\\]\\.conPedIdNum", this.getField('DEFT_IMEI Number').value) +
//setIMEI("##holderDeviceInfo\\[0\\]\\.pedTelNum", this.getField('deft cell tel 0').value.toString() + this.getField('deft cell tel 1').value + this.getField('deft cell tel 2').value) +

// Deft Recording Police Activity
setOption("#arrestInfo\\.recordPoliceActivity", 1) + // todo

// Narrative
setValue("#narratDetails\\.details", this.getField("61 narrative_1").value) +

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

// Male / Female
MaleOrFemale() +

/* setRadio("defendDetails.pdatPedig.sex", this.getField("Check Box49").value) +
setRadio("defendDetails.pdatPedig.sex", this.getField("Check Box50").value) 

//document.querySelector("#defendDetails\\.pdatPedig\\.sex").checked=true
document.querySelector("#defendDetails\\.pdatPedig\\.sex").checked='Yes';
document.querySelector("#defendDetails\\.pdatPedig\\.sex").checked='true';
document.querySelector("#defendDetails\\.pdatPedig\\.sex").value=true; */

// Height
setValue("#defendDetails\\.pdatPedig\\.heightFeet", this.getField("Text41").value) +
setValue("#defendDetails\\.pdatPedig\\.heightInches", this.getField("Text42").value) +

// Weight
setValue("#defendDetails\\.pdatPedig\\.weight", this.getField("Text43").value) +

// Race
Race() +

// Eye Color
setOption("#defendDetails\\.pdatPedig\\.eyeColor", this.getField("DEFT EYECOLOR").value) +

// Hair Color
setOption("#defendDetails\\.pdatPedig\\.hairColor", this.getField("DEFT HAIRCOLOR").value) +

// Hair Lenght
setOption("#defendDetails\\.pdatPedig\\.hairLength", this.getField("DEFT HAIRLENGTH").value) +

// US Citizen
setOption("#defendDetails\\.pdatPedig\\.citizen", this.getField("DEFT US CITIZEN").value) +

// Permanent Residence Address
// Address Location
setOption("#defendDetails\\.addrResAddress\\.resCode", this.getField("DEFT ADDRESS STATUS").value) + 

// Building #
setValue("#defendDetails\\.addrResAddress\\.addressNum", this.getField("Defts Home Address Number").value) +

// Address
setValue("#defendDetails\\.addrResAddress\\.streetName", this.getField("Defts Home Address Street").value) +

// City
setOption("#defendDetails\\.addrResAddress\\.borough", getCity("City")) +

// Zip
setValue("#defendDetails\\.addrResAddress\\.zip", this.getField("Zip").value) +

// Apt
setValue("#defendDetails\\.addrResAddress\\.aptNum", this.getField("Apt").value) +

//DeftPhoneNumbersEmail(); + 

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
//DEFT PHY FORCE WEAP
//input: #defendDetails\.holderWeapon\[0\]\.wpnForce
//trimm: defendDetails.holderWeapon[0].wpnForce
//document.querySelector("#defendDetails\\.holderWeapon\\[0\\]\\.wpnForce").options.selectedIndex=2;

//Firearm Recovered
setOption("#defendDetails\\.holderWeapon\\[0\\]\\.recovered", this.getField("DEFT FIREARM REC").value) +

//Discharged
setOption("#defendDetails\\.holderWeapon\\[0\\]\\.firearmDisch", this.getField("DEFT FIREARM DISCH").value) +

// Suspected Gang Member
setOption("#defendDetails\\.nmatName\\.gangAffiliate", this.getField("DEFT GANG AFFI").value) +

// Used Transit System  
setOption("#defendDetails\\.perpUsedTA", this.getField("DEFT USED SUBW").value) +

// Statement made by Perpetrator
setValue("#defendDetails\\.unusualMoStatement\\.itemOther", this.getField("DEFT MADE STATEMENT").value) +

// Method of Flight
setValue("#defendDetails\\.unusualMoMethodOfFl\\.itemOther", this.getField("DEFT METHOD OF FLIGHT").value) +

// Impersonation of
setOption("#defendDetails\\.unusualMoImpersonation\\.ucatItem", this.getField("DEFT IMPRES OF").value) +
setValue("#defendDetails\\.unusualMoImpersonation\\.itemOther", this.getField("DEFT IMPERS OF OTHER").value) 

;




