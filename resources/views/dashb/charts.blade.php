@extends('dashb.dashlayout')
@section('dashbody')
<section class="content-header">
    <h1>
      Charts
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="breadcrumb-item"><a href="#">Charts</a></li>
      <li class="breadcrumb-item active">market charts</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="row">
        <div class="col-12">
          <!-- interactive chart -->
          <div class="box">
            <div class="box-header with-border">
              <i class="fa fa-line-chart"></i>

              <h3 class="box-title">Trading View Charts</h3>

              <div class="box-tools pull-right">
                Real time
                <div class="btn-group" id="realtime" data-toggle="btn-toggle">
                  <button type="button" class="btn btn-default bg-green btn-sm active" data-toggle="on">On</button>
                  <button type="button" class="btn btn-default bg-red btn-sm" data-toggle="off">Off</button>
                </div>
              </div>
            </div>
            <div class="box-body">
              <div id="interactive" style="height: 100%;">
                <!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
    <div id="tradingview_4c965"></div>
    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPL Chart</span></a> by TradingView</div>
    <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
    <script type="text/javascript">
    new TradingView.widget(
    {
    "width": 980,
    "height": 610,
    "symbol": "NASDAQ:AAPL",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "light",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "container_id": "tradingview_4c965"
  }
    );
    </script>
  </div>
  <!-- TradingView Widget END -->
              </div>
            </div>
            <!-- /.box-body-->
          </div>
          <!-- /.box -->

        </div>
        <!-- /.col -->
      </div>

    <div class="row">
      <div class="col-12 col-lg-6">
        <!-- Line chart -->
        <div class="box">
          <div class="box-header with-border">
            <i class="fa fa-line-chart"></i>

            <h3 class="box-title">Some Coin Chart</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <div class="box-body">
            <div id="line-chart" style="height: 300px;">
                <div style="height:433px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F; padding: 0px; margin: 0px; width: 100%;">
                    <div style="height:413px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=6&pref_coin_id=1505&graph=yes" width="100%" height="409px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe>
                    </div>
                    <div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by Coinlib</div>
                </div>
            </div>
          </div>
          <!-- /.box-body-->
        </div>
        <!-- /.box -->

        <!-- Area chart -->
        <div class="box">
          <div class="box-header with-border">
            <i class="fa fa-area-chart"></i>

            <h3 class="box-title">Bitcoin Chart</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <div class="box-body">
            <div id="area-chart" style="height: 300px;" class="full-width-chart">

                <div style="height:560px; background-color: #FFFFFF; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F;padding:1px;padding: 0px; margin: 0px; width: 100%;"><div style="height:540px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;line-height:14px;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by Coinlib</div></div>

            </div>
          </div>
          <!-- /.box-body-->
        </div>
        <!-- /.box -->

      </div>
      <!-- /.col -->

      <div class="col-12 col-lg-6">
        <!-- Bar chart -->
        <div class="box">
          <div class="box-header with-border">
            <i class="fa fa-bar-chart-o"></i>

            <h3 class="box-title">Bar Chart</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <div class="box-body">
            <div id="bar-chart" style="height: 300px;">
            <iframe frameborder="0" scrolling="no" height="274" width="505" allowtransparency="true" marginwidth="0" marginheight="0" src="https://ssltools.investing.com/technical_summary.php?pairs=8830,8836,8862,13916,959211,469&curr-name-color=%230059B0&fields=5m,15m,1h,1d&force_lang=72"></iframe><br /><div style="width:505px;"><span style="float:left"><span style="font-size: 11px;color: #333333;text-decoration: none;">This Technical Analysis is powered by <a href="https://ng.investing.com/" rel="nofollow" target="_blank" style="font-size: 11px;color: #06529D; font-weight: bold;" class="underline_link">Investing.com Nigeria</a></span></span></div>
            </div>
          </div>
          <!-- /.box-body-->
        </div>
        <!-- /.box -->

        <!-- Donut chart -->
        <div class="box">
          <div class="box-header with-border">
            <i class="fa fa-bar-chart-o"></i>

            <h3 class="box-title">Exchanger</h3>

            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <div class="box-body">
            <div id="donut-chart" style="height: 300px;">
                <div style="width: 100%; height:100%; background-color: #FAFAFA; overflow:hidden; box-sizing: border-box; border: 1px solid #56667F; border-radius: 4px; text-align: right; line-height:14px; block-size:335px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #56667F;margin: 0;width: 360px;padding:1px;padding: 0px; margin: 0px;"><div style="height:315px; padding:0px; margin:0px; width: 100%;"><iframe src="https://widget.coinlib.io/widget?type=converter&theme=light" width="360" height="310px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe></div><div style="color: #FFFFFF; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;"><a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #FFFFFF; text-decoration:none; font-size:11px">Cryptocurrency Prices</a>&nbsp;by Coinlib</div></div>
            </div>
          </div>
          <!-- /.box-body-->
        </div>
        <!-- /.box -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->
    <div class="row">
      <div class="col-12">
        <!-- interactive chart -->
        <div class="box">
          <div class="box-header with-border">
            <i class="fa fa-line-chart"></i>

            <h3 class="box-title">Market Currency Rates Widget</h3>

            <div class="box-tools pull-right">
              Real time
              <div class="btn-group" id="realtime" data-toggle="btn-toggle">
                <button type="button" class="btn btn-default bg-green btn-sm active" data-toggle="on">On</button>
                <button type="button" class="btn btn-default bg-red btn-sm" data-toggle="off">Off</button>
              </div>
            </div>
          </div>
          <div class="box-body">
            <div id="interactive" style="height: 300px;">
                <iframe src="https://fxpricing.com/fx-widget/market-currency-rates-widget.php?id=1,2,3,5,14,20" width="100%" height="290" style="border: 1px solid #eee;"></iframe> <div id="fx-pricing-widget-copyright"> <span>Powered by </span><a href="#" target="_blank">FX Pricing</a> </div> <style type="text/css"> #fx-pricing-widget-copyright{ text-align: center; font-size: 13px; font-family: sans-serif; margin-top: 10px; margin-bottom: 10px; color: #9db2bd; } #fx-pricing-widget-copyright a{ text-decoration: unset; color: #bb3534; font-weight: 600; } </style>
            </div>
          </div>
          <!-- /.box-body-->
        </div>
        <!-- /.box -->

      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->
  </section>

  @endsection()
