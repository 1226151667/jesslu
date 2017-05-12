<?php
namespace app\index\controller;

class Index
{
    public function index()
    {
        session("nextPageUrl","main2");
        return view();
    }
    public function main2()
    {
        session("nextPageUrl","main3");
        return view();
    }
    public function main3()
    {
        session("nextPageUrl","web");
        return view();
    }
    public function main3Tk()
    {
        return view();
    }
    public function web()
    {
        session("nextPageUrl","h5");
        return view();
    }
    public function h5()
    {
        session("nextPageUrl","operate");
        return view();
    }
    public function operate()
    {
        session("nextPageUrl","contact");
        return view();
    }
    public function contact()
    {
        session("nextPageUrl","/");
        return view();
    }
}
