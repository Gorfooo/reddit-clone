<?php
namespace Reddit\Subreddit\Model;

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
    protected $id_solicitacao_moderador;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Subreddit\model\Subreddit", inversedBy="id_solicitacao_moderador")
    * @ORM\JoinColumn(name="id_subreddit", referencedColumnName="id_subreddit", nullable=false)
    */
    protected $id_subreddit;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Usuario\model\Usuario", inversedBy="id_solicitacao_moderador")
    * @ORM\JoinColumn(name="id_usuario", referencedColumnName="id_usuario", nullable=false)
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
