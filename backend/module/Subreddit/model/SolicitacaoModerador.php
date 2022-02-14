<?php
namespace Subreddit\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Solicitacao_Moderador")
*/
class SolicitacaoModerador
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    protected $id_subreddit;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $id_usuario;

    /**
    * @ORM\Column(type="text")
    *
    * @var string
    */
    private $solicitacao;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $aceito;

    /**
    * @ORM\Column(type="text")
    *
    * @var string
    */
    private $motivo_recusa;
}
