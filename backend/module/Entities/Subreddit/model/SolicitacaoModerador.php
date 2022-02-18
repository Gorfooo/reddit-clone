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
    private $id_solicitacao_moderador;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Subreddit\model\Subreddit", inversedBy="id_solicitacao_moderador")
    * @ORM\JoinColumn(name="id_subreddit", referencedColumnName="id_subreddit", nullable=false)
    */
    private $id_subreddit;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Usuario\model\Usuario", inversedBy="id_solicitacao_moderador")
    * @ORM\JoinColumn(name="id_usuario", referencedColumnName="id_usuario", nullable=false)
    */
    private $id_usuario;

    /**
    * @ORM\Column(type="text")
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
    */
    private $motivo_recusa;

    /**
     * Get idSolicitacaoModerador.
     *
     * @return int
     */
    public function getIdSolicitacaoModerador()
    {
        return $this->id_solicitacao_moderador;
    }

    /**
     * Set solicitacao.
     *
     * @param string $solicitacao
     *
     * @return SolicitacaoModerador
     */
    public function setSolicitacao($solicitacao)
    {
        $this->solicitacao = $solicitacao;

        return $this;
    }

    /**
     * Get solicitacao.
     *
     * @return string
     */
    public function getSolicitacao()
    {
        return $this->solicitacao;
    }

    /**
     * Set aceito.
     *
     * @param string $aceito
     *
     * @return SolicitacaoModerador
     */
    public function setAceito($aceito)
    {
        $this->aceito = $aceito;

        return $this;
    }

    /**
     * Get aceito.
     *
     * @return string
     */
    public function getAceito()
    {
        return $this->aceito;
    }

    /**
     * Set motivoRecusa.
     *
     * @param string $motivoRecusa
     *
     * @return SolicitacaoModerador
     */
    public function setMotivoRecusa($motivoRecusa)
    {
        $this->motivo_recusa = $motivoRecusa;

        return $this;
    }

    /**
     * Get motivoRecusa.
     *
     * @return string
     */
    public function getMotivoRecusa()
    {
        return $this->motivo_recusa;
    }

    /**
     * Set idSubreddit.
     *
     * @param \Reddit\Subreddit\model\Subreddit $idSubreddit
     *
     * @return SolicitacaoModerador
     */
    public function setIdSubreddit(\Reddit\Subreddit\model\Subreddit $idSubreddit)
    {
        $this->id_subreddit = $idSubreddit;

        return $this;
    }

    /**
     * Get idSubreddit.
     *
     * @return \Reddit\Subreddit\model\Subreddit
     */
    public function getIdSubreddit()
    {
        return $this->id_subreddit;
    }

    /**
     * Set idUsuario.
     *
     * @param \Reddit\Usuario\model\Usuario $idUsuario
     *
     * @return SolicitacaoModerador
     */
    public function setIdUsuario(\Reddit\Usuario\model\Usuario $idUsuario)
    {
        $this->id_usuario = $idUsuario;

        return $this;
    }

    /**
     * Get idUsuario.
     *
     * @return \Reddit\Usuario\model\Usuario
     */
    public function getIdUsuario()
    {
        return $this->id_usuario;
    }
}
