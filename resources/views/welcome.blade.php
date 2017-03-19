@extends('layouts.app')

@section('content')
<div class="container">
  <base href="./">
      {{ Html::style('css/styles.css') }}



  <!-- Load libraries -->
  <!-- IE required polyfills, in this exact order -->
  {{ Html::script('es6-shim/es6-shim.min.js') }}
  {{ Html::script('zone.js/dist/zone.js') }}
  {{ Html::script('reflect-metadata/Reflect.js') }}
  {{ Html::script('systemjs/dist/system.src.js') }}
  {{ Html::script('systemjs.config.js') }}




<!--
  {{ Html::script('@angular/es6/dev/src/testing/shims_for_IE.js') }}
  {{ Html::script('@angular/bundles/angular2-polyfills.js') }}
  {{ Html::script('systemjs/dist/system.js') }}
  {{ Html::script('rxjs/bundles/Rx.js') }}
  {{ Html::script('angular2/bundles/angular2.dev.js') }}
  {{ Html::script('angular2/bundles/router.dev.js') }}
  {{ Html::script('angular2/bundles/http.dev.js') }}
  {{ Html::script('js/d3.min.js') }}
  {{ Html::script('js/c3.min.js') }}
  {{ Html::script('js/scripts.js') }}-->


  <script>
    System.import('app').catch(function(err){ console.error(err); });
  </script>

      <meta property="csrf-token" name="csrf-token" content="{{ csrf_token() }}">
  </head>
  <body>
      <div class="container">
          <div class="content">
              <my-app>
                <div class="loader">
                    <img src="{{asset('images/loader-img.gif')}}" alt="" />
                </div>
              </my-app>

          </div>
      </div>
</div>

@endsection
