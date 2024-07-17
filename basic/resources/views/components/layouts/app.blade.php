<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .kotak1{
            background-color: blue;
            width: 200px;
            padding: 5px;
            margin: 5px;
            color: white;
            border: 2px solid black;
            text-align: center
        }
        .main{
            background-color: yellow;
            width: 200px;
            padding: 5px;
            margin: 5px;
            color: white;
            border: 2px solid black;
            text-align: center
        }
        .kotak2{
            background-color: red;
            width: 200px;
            padding: 5px;
            margin: 5px;
            color: white;
            border: 2px solid black;
            text-align: center
        }
    </style>
    @livewireStyles
</head>
<body>
    <center>
    @livewire('kotak1')
    {{$slot}}
   @livewire('kotak2')
</center>

    @livewireScripts
</body>
</html>