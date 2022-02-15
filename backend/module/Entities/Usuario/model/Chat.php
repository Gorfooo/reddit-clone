<?php
namespace Reddit\Usuario\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Chat")
*/
class Chat
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    protected $id_usuario_destino;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $id_usuario_escritor;

    /**
    * @ORM\Column(type="datetime")
    *
    * @var string
    */
    private $data_hora;

    /**
    * @ORM\Column(type="text")
    *
    * @var string
    */
    private $mensagem;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $lido;
}
