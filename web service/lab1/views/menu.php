<?php
if(isset($_GET['city'])){
    require_once("display.php");
}

$myfile = fopen("../eg1.json", "r") or die("Unable to open file!");

$fileString=stream_get_contents($myfile);
$cities=json_decode($fileString);

?>
<h5>weather forecast</h5>

<form action="menu.php" method="get">
    
    <label for="city-names">Choose a city:</label>
    <select name="city" id="city-name">
        <?php
        foreach ($cities as $key => $value) {
        echo("<option value='$value->name'>$value->name</option>");
        }
        ?>
    </select>
    <input type="submit" value="Get weather" />

</form>
<?php
fclose($myfile);
?>

