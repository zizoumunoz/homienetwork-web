$.getJSON('https://api.mcsrvstat.us/2/mc.homienetwork.ca', function(data) {
        
        var playerNumber = `${data.players.online}`;
        var serverVersion = `${data.version}`;
        var onlineStatus = `${data.online}`;
        
        $("#playerno").html(playerNumber);
        $("#serverversion").html(serverVersion);
        if (onlineStatus == 'true'){
            $("#serverstatus").html('<b style="color: #16aa2f;">Online</b>')
        } else {
            $("#serverstatus").html('Offline')
        }
    });

function copyToClipboard()
{


    // Copy the text inside the text field
    navigator.clipboard.writeText("mc.homienetwork.ca");

    // Alert the copied text
    alert("Copied: " + copyText.value);
}