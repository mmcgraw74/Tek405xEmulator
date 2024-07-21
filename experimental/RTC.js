
class RTC {


    call(addr, gpibobj) {
// console.log("Called RTC");        
        if (addr == 0x6D) this.read(gpibobj);
    
    }


    read(gpibobj) {

        let d = new Date();

        let m = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];

	    let timeNow = "";

        timeNow += String(d.getDate()).padStart(2,'0');
		timeNow += "-";

	    timeNow += m[ d.getMonth() ];
		timeNow += "-";

		timeNow += String(d.getFullYear() % 100);
		timeNow += " ";

        timeNow += String(d.getHours()).padStart(2,'0');
	    timeNow += ":";

        timeNow += String(d.getMinutes()).padStart(2,'0');
		timeNow += ":";

        timeNow += String(d.getSeconds()).padStart(2,'0');

		timeNow += ":";
        timeNow += String(d.getMilliseconds()).padStart(3,'0');
        

        let timestamp = new Uint8Array(timeNow.length);
        
        for (let i=0; i<timeNow.length; i++) {
            timestamp[i] = timeNow.charCodeAt(i);
        }

        gpibobj.inputBuffer = timestamp;

    }

}

//module.exports = RTC;


