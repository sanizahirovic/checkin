<?php
namespace App\Http\Controllers;
use DateTime;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Http\Requests;
use Auth;
use App\User;
use App\Log;
class MainController extends Controller
{

    public function login(Request $request){

      $email = $request->email;
      $password = $request->password;

      if (Auth::attempt(['email' => $email, 'password' => $password ],true)) {
        // Authentication passed...
        $this->loggedUser = Auth::user();
        if($this->loggedUser){
          return response()->json([
            'isLoggedIn' => true,
            'user' => $this->loggedUser
            ]);
        }
        else{
          return response()->json([
            'isLoggedIn' => false
            ]);
        }

      }
      return response()->json([
        'isLoggedIn' => false
        ]);

    }
    public function logout(){
      Auth::logout();

      return response()->json([
        'isLoggedIn' => false
        ]);
    }
    public function checkin(Request $request){

      $user_email = $request->user_email;
      $date = $request->checkin;
      $date = Carbon::createFromFormat("d m Y H:i:s", $date);
      $user = User::where('email',$user_email)->first();
      if($user){
        $log = new Log();
        $log->checkin = $date;
        $log->user_id = $user->id;
        $log->save();
      }

      return response()->json([
        'log_id' => $log->id
        ]);
    }

    public function checkout(Request $request){

      $user_email = $request->user_email;
      $date = $request->checkin;
      $log_id = $request->log_id;
      $date = Carbon::createFromFormat("d m Y H:i:s", $date);
      $user = User::where('email',$user_email)->first();
      if($user){

        $log = Log::where('id',$log_id)->first();
        $start_time = new DateTime($log->checkin);
        $log->checkout = $date;
        $finish_time = new DateTime($log->checkout);
        $total_time = $finish_time->diff($start_time)->format("%h hours %i minutes %s seconds");
        $log->total_time = $total_time;
        $log->save();
      }

      return response()->json([
        'logs' => $user->logs
        ]);
    }

    public function logApi($email){
      $user = User::where('email',$email)->first();
      if($user){
        return response()->json([
          'logs' => $user->logs
          ]);
      }
      else{
        return response()->json([
          'error' => 'Something is wrong with api!!!'
          ]);
      }


    }
}
