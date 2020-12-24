<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Recart.me') }}</title>

    <script
        src="https://polyfill.io/v3/polyfill.min.js?features=smoothscroll,NodeList.prototype.forEach,Promise,Object.values,Object.assign"
        defer>
    </script>

    <link href="/images/icons/favicon.ico" rel="shortcut icon" type="image/x-icon"/>

{{--        <link rel="stylesheet" href="{{ asset('css/vendors/owl.carousel.min.css') }}">--}}
{{--        <link rel="stylesheet" href="{{ asset('css/vendors/owl.theme.default.min.css') }}">--}}

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.15/dist/css/uikit.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.15/dist/js/uikit.min.js"></script>

    <link rel="stylesheet" href="{{ asset('css/vendors/fontawesome.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/vendors/pagination.min.css') }}">

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

</head>
<body class="font-sans antialiased">

@routes
@inertia

<script src="{{ mix('js/app.js') }}" defer></script>
</body>
</html>
