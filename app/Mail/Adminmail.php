<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Adminmail extends Mailable
{
    use Queueable, SerializesModels;
    public $emaildata = array();

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($emaildata)
    {
        //
        $this->emaildata = $emaildata;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.adminmail');
    }
}

//  $emaildata=['data'=> $email,'email_body'=>$email_body,'email_header'=>$email_header];

// Mail::to($email)->send(new customemail($emaildata));
