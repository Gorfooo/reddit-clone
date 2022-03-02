<?php

declare(strict_types=1);

namespace User\Controller;

use Laminas\Mvc\Controller\AbstractActionController;
use Laminas\View\Model\JsonModel;
use Entities\Usuario\Model\Usuario;
use User\Service\UserGateway;
use Laminas\Http\PhpEnvironment\Request;
use Laminas\Http\PhpEnvironment\Response;

class UserController extends AbstractActionController
{
    public function createAction($userData = null)
    {
        // $data = $this->params()->fromPost();
        // $data = $this->getRequest();
        $data = $this->_request;
        // $data = new Request;



        // echo $userData;
        // $userData = (object) [
        //     'name' => 'usuario',
        //     'email' => 'email',
        //     'password' => '1',
        //     'esconder_online' => 'N',
        //     'karma' => '0',
        //     'birthDate' => '2000-01-01',
        // ];

        // $user = new Usuario();
        // $user->setNome($userData->name);
        // $user->setEmail($userData->email);
        // $user->setSenha($userData->password);
        // $user->setEsconderOnline($userData->esconder_online);
        // $user->setKarma($userData->karma);
        // $user->setNascimento(\DateTime::createFromFormat('Y-m-d', $userData->birthDate));

        // $operation = new UserGateway;
        // $operation->createUser($user);
        
        return new JsonModel(array('response' => $data));
    }

    public function updateAction($userData = null)
    {

    }
}