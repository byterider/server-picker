	var widget = `
<div style="position: absolute; top: 40px; left: 50%;">
	<form style="position: relative; left: -50%; border: solid #ccc 1px; box-shadow: 2px 2px 8px 0px rgba(51,51,51,0.30); padding: 25px; background: -webkit-linear-gradient(top, #92c500 0%,#6f9b00 100%); font-size: 13px; line-height: 20px; font-family: Myriad, Lucida Grande, sans-serif; color: #fff;">
		<button class="form-control" onclick="destroy()" style="padding: 1px; width: 15px; height: 15px; float: right; font-size: 8px;">X</button>
		Choose a Server: <br>
		<select id="server" class="form-control">
			<option value="https://vimapget-emaz1i.it.bwns.ch:4502">INT0 - AEM6 - Author
			<option value="https://cms.int.swisscom.ch">			INT0 - AEM6 - cms.int
			<option value="https://orion.int.swisscom.ch">			INT0 - AEM6 - orion.int

			<option value="http://vimapget-cqaz1i.it.bwns.ch:4502">	INT0 - CQ5 - Author Bluewin
			<option value="https://www.int.bluewin.ch">				INT0 - CQ5 - www.int.bluewin

			<option value="http://zhbapget-cqau1x.it.bwns.ch:4502">	INT1 - CQ5 - Author Bluewin
			<option value="https://www.int1.bluewin.ch">			INT1 - CQ5 - www.int1.bluewin

			<option value="http://zhbapget-cqau1z.it.bwns.ch:4502">	CONTENTSTAGE - CQ5 - Author
			<option value="https://www.contentstage.swisscom.ch">	CONTENTSTAGE - CQ5 - www.contentstage

			<option value="https://vimapget-emaz1t.it.bwns.ch:4502">TEST0 - AEM6 - Author
			<option value="https://cms.test.swisscom.ch">			TEST0 - AEM6 - cms.test
			<option value="https://orion.test.swisscom.ch">			TEST0 - AEM6 - orion.test

			<option value="https://vimapget-emaz1u.it.bwns.ch:4502">TEST1 - AEM6 - Author
			<option value="https://cms.test1.swisscom.ch">			TEST1 - AEM6 - cms.test1
			<option value="https://orion.test1.swisscom.ch">		TEST1 - AEM6 - orion.test1

			<option value="http://zhbapget-cqau1v.it.bwns.ch:4502">	TEST2 - CQ5 - Author Bluewin
			<option value="https://www.test2.bluewin.ch">			TEST2 - CQ5 - www.test2

			<option value="https://cms.staging.swisscom.ch">		STAGING - AEM6 - cms.staging
			<option value="https://www.staging.swisscom.ch">		STAGING - AEM6 - www.staging

			<option value="http://zhhappsp-cqau2s.it.bwns.ch:4502">	STAGING - CQ5 - Author Bluewin
			<option value="https://www.staging.bluewin.ch">			STAGING - CQ5 - www.staging.bluewin

			<option value="https://vimappsp-emaz01.it.bwns.ch:4502">PROD - AEM6 - Author
			<option value="https://cms.swisscom.ch">				PROD - AEM6 - cms.swisscom
			<option value="https://www.swisscom.ch">				PROD - AEM6 - www.swisscom

			<option value="http://zhhappsp-cqau02.it.bwns.ch:4502">	PROD - CQ5 - Author Bluewin
			<option value="https://cms.entertainment.swisscom.ch "> PROD - CQ5 - cms.entertainment
			<option value="https://www.bluewin.ch">					PROD - CQ5 - www.bluewin
		</select> <br><br>
		Choose an Action: <br>
		<button class="form-control" onclick="return openURL('/crx/de/index.jsp');">CRX DE Lite</button>
		<button class="form-control" onclick="return openURL('/crx/packmgr/index.jsp');">CRX Package Manager</button>
		<button class="form-control" onclick="return openURL('/siteadmin#/content/swisscom/de/component-gallery');">CMS</button>
		<button class="form-control" onclick="return openURL('/damadmin#/content/dam/swisscom/de');">DAM</button>
		<button class="form-control" onclick="return openURL('/miscadmin#/etc/swisscom/tools/testcases');">Tools</button>
		<button class="form-control" onclick="return showVersion();">Version</button>
	</form>
</div>
	`;
	var body = document.getElementsByTagName('body')[0],
		div = document.createElement('div');
	if (body && div) {
		div.id = 'widget';
		div.innerHTML = widget;
		body.appendChild(div);
	}
	function destroy() {
		document.getElementById('widget').remove();		
	}
	function getServer() {
		var select = document.getElementById('server');
		return select.options[select.selectedIndex].value;
	}
	function showVersion() {
		var path = '/etc/designs/res/resources/version.txt?devconsole';
		open(getServer() + path, 'version', 'width=600,height=200');
		return false;
	}
	function openURL(path) {
		location.href = getServer() + path;
		return false;
	}
